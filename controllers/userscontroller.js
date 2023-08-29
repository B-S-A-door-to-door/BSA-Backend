const Users = require("../models/users")


// get all users
exports.getAllUsers = async(req, res, next) => {
    try{    
        const offset = req.params.skip * req.params.limit;
        const result = await Users.find({isAdmin: false, orgId: req.user.orgId}).skip(offset).limit(req.params.limit);

        if(result){
            return res.status(200).json({
                status: "success",
                message: "Successfully retrieved users",
                results : result.length,
                data : {
                    result
                }
            })
        }

        return res.status(400).json({
            status : "fail",
            message: "No user found"
        })
              

    }catch(error){
        res.status(500).json({
            status: "error",
            message: "An Error occured, try again."
        })
        next(error)
    }

}

// get user details
exports.getUserDetails = async(req, res, next) => {
    try{
        const result = await Users.find({username: req.params.username, orgId: req.user.orgId})

        if(result){
            return res.status(200).json({
                status: "success",
                message: "Successfully retrieved user details",
                data : {
                    result
                }
            })
        }

        return res.status(400).json({
            status : "fail",
            message: "No user found"
        })
              

    }catch(error){
        res.status(500).json({
            status: "error",
            message: "An Error occured, try again."
        })
        next(error)
    }

}



//update user details
exports.updateUser = async (req, res, next) => {

    try{
        const user = await Users.findOneAndUpdate({username: req.params.username}, req.body, {
            new: true,
            runValidators: true
        })
    
        if(!user){
            return res.status(404).json({
                status: "fail",
                message: "User does not exist"
            })
        }
        await user.save({validateBeforeSave: true})
    
        res.status(200).json({
            status: "success",
            data : {
                user
            }
    })
    }catch(error){
        res.status(500).json({
            status: "error",
            message: "An error occured, try again."
        })
        next(error)
    }
}


//delete user 
exports.deleteUser = async (req, res, next) => {
    try{
        const results = await Users.deleteOne({username : req.params.username});
        if(results.deletedCount < 1){
            return res.status(400).json({
                status: "fail",
                message: "User does not exist"
            })
        }

        return res.status(202).json({
            status: "success",
            message: "User deleted successfully"
        })
    }catch(error){
        res.status(500).json({
            status: "error",
            message: "An error occured, try again."
        })
        next(error)
    }
}

