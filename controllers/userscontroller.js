const Users = require("../models/users");

// TEMP router
exports.createAdmin = async (req, res, next) => {
  const newAdmin = await Users.create({
    fullname: "DevMode Admin",
    username: "devadmin3",
    password: 1234,
    contact: "0256723294",
    dateOfBirth: 1692872777193,
    orgId: "01",
    isAdmin: true,
  });

  console.log(newAdmin);
  // await newAdmin.save();

  return res.json({ status: "success" });
};

// get all users
exports.getAllUsers = async (req, res, next) => {
  try {
    const offset = req.params.skip * req.params.limit;
    const result = await Users.find({ isAdmin: false, orgId: req.user.orgId })
      .collation({ locale: "en", strength: 1 })
      .sort({ fullname: 1 })
      .skip(offset)
      .limit(req.params.limit);

    if (result) {
      return res.status(200).json({
        status: "success",
        message: "Successfully retrieved users",
        results: result.length,
        data: {
          result,
        },
      });
    }

    return res.status(400).json({
      status: "fail",
      message: "No user found",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An Error occured, try again.",
    });
    next(error);
  }
};

// get user details
exports.getUserDetails = async (req, res, next) => {
  try {
    const result = await Users.find({
      username: req.params.username,
      orgId: req.user.orgId,
    });

    if (result) {
      return res.status(200).json({
        status: "success",
        message: "Successfully retrieved user details",
        data: {
          result,
        },
      });
    }

    return res.status(400).json({
      status: "fail",
      message: "No user found",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An Error occured, try again.",
    });
    next(error);
  }
};

//update user details
exports.updateUser = async (req, res, next) => {
  const password = req.body.password;
  if (!password) req.body.password = undefined;

  try {
    const user = await Users.findOneAndUpdate(
      { username: req.params.username, orgId: req.user.orgId },
      req.body,
      {
        new: true,
      }
    );

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User does not exist",
      });
    }

    return res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "An error occured, try again.",
    });
    next(error);
  }
};

//delete user
exports.deleteUser = async (req, res, next) => {
  try {
    console.log("param: ", req.params.username);
    const results = await Users.deleteOne({
      username: req.params.username,
      orgId: req.user.orgId,
    });
    if (results.deletedCount < 1) {
      return res.status(400).json({
        status: "fail",
        message: "User does not exist",
      });
    }

    return res.status(202).json({
      status: "success",
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An error occured, try again.",
    });
    next(error);
  }
};
