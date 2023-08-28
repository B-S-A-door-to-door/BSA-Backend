const jwt = require('jsonwebtoken');
const Users = require('../models/users')
const { promisify } = require('util')
const AppError = require("../Util/appError");
const catchAsync = require("../Util/catchAsync")
const bcrypt = require('bcryptjs');


// signs token for authentication
const SignToken = (id, orgId, username) => {
    return jwt.sign({ id, orgId, username }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY })
}

// function for sending token on login
const SendToken = (user, res, statusCode) => {
    const token = SignToken(user._id, user.orgId, user.username)


    res.status(statusCode).json({
        status: 'success',
        message: "Successfully logged in",
        token,
        data: user,
    })

}




// user sign up controller
exports.signUp = catchAsync (async (req, res, next) => {
        const date = new Date().getTime(req.body.dateOfBirth)
        const user = await Users.create({
            fullname: req.body.fullname,
            username: req.body.username,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
            contact: req.body.contact,
            dateOfBirth: date
        });

        user.password = undefined;

        res.status(201).json({
            status: 'success',
            message: 'successfully added a new user',
            data: {
                user
            }
        })
   

    })

// user sign in controller
exports.signIn = async(req, res, next) =>{
    try{
        const { username, password } = req.body

        // checks if username and password are provided
        if (!username || !password) {
            return res.status(400).json({
                status: "fail",
                message: "Please provide username and password"
            })
        }
        // checks if user exists and password is correct
        const user = await Users.findOne({ username }).select('+password');

        if (!user || !(await user.correctPassword(password, user.password))) {
            return res.status(400).json({
                status: "fail",
                message: "Wrong password or User does not exist. Please Try again"
            })
        }

        // removes user's password from response
        user.password = undefined;

        // sends token
        SendToken(user, res, 201)


    }catch(error){
        next(error)
        console.log("An error occured, try again.")
    }

}

exports.resetAdminPassword = catchAsync(async (req, res, next) => {
    const {oldPassword} = req.body

    const currentUser = await Users.findOne({ username : req.user.username }).select('+password');

    if (!currentUser || !(await currentUser.correctPassword(oldPassword, currentUser.password))) {
        return res.status(400).json({
            status: "fail",
            message: "The input password does not match the old password. Please Try again"
        })
    }

    const password = await bcrypt.hash(req.body.password, 12);

    const updated = {
        username: req.body.username,
        password,
        fullname: req.body.fullname,
    }


    const user = await Users.findOneAndUpdate({username : currentUser.username }, updated, {
        new: true,
        runValidators: true
    })

    if(!user){
        return res.status(404).json({
            status: "fail",
            message: "Failed to update admin details"
        })
    }
    await user.save({validateBeforeSave: true})

    res.status(200).json({
        status: "success",
        message: "Successfully updated admin details.",
        data : {
            user
        }
})


    next()
})

exports.protect = catchAsync(async (req, res, next) => {

    // get token and check if it's there
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    };

    // checks validity of the token
    if (!token) {
        return next(new AppError('You are not logged in.Please Log in to get access', 401))
    };

    // verifying token/ decodes token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    //checking if user still exist
    const currentUser = await Users.findById(decoded.id)
    if (!currentUser) {
        return next(new AppError('User with this token does no longer exist', 401))
    };

    // grants access to protected routes
    req.user = currentUser;
    next()
})


// restrict access to certain routes
exports.restrictTo = (req, res, next) => {
        if (!req.user.isAdmin){
            return next(new AppError("You do not have permission to perform this action", 403))
        }
        next()
    }








