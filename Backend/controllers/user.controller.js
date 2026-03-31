const userModel = require("../models/user.model");
const { validationResult } = require("express-validator");
const userService = require("../services/user.service");

//register function 
module.exports.register = async (req, res, next) => {
    const errors = validationResult(req); // check validation that we have done in user.routes 

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    // hash password
    const hashedPassword = await userModel.hashPassword(password);

    // create user
   const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword
});

    // generate token
    const token = user.generateAuthToken();

    res.status(201).json({
        message: "User registered successfully",
        token
    });
};
//login function
module.exports.login = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log("Validation errors:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');

    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        console.log("Invalid email or password");
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = user.generateAuthToken();

    res.cookie("token", token); // Set token in cookie
    res.status(200).json({
        message: "Login successful",
        token
    });
};

module.exports.getUserProfile = async (req, res, next) => {

    res.status(200).json({
        message: "User profile retrieved successfully",
        user: req.user
    });

}

module.exports.logout = async (req, res, next) => {
    res.clearCookie("token"); // Clear the token cookie
    res.status(200).json({
        message: "Logout successful"
    });
}