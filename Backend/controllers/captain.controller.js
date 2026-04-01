const captainModel = require("../models/captain.model");    

const {validationResult} = require("express-validator");
const captainService = require("../services/captain.service");

//register for captain
module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        fullname,email,password ,vehicle
    } = req.body;

    const isCaptainExist = await captainModel.findOne({ email });

    if (isCaptainExist) {
        return res.status(400).json({ message: "Captain with this email already exists" });
    }

    //hashed password 
    const hashedPassword = await captainModel.hashPassword(password);

    //create captain
    const captain = await captainService.createCaptain({
        firstname : fullname.firstname,
        lastname : fullname.lastname,
        email,
        password : hashedPassword,
        color : vehicle.color,
        plate: vehicle.plate,
        capacity : vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });
    const token = captain.generateAuthToken();

    res.status(201).json({
        message : "Captain registered successfully",
        token
    });
};

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log("Validation errors:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await captainModel.findOne({ email }).select('+password');

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
}

module.exports.getCaptainProfile = async (req,res, next) =>{
    res.status(200).json({
        message: "Captain profile retrieved successfully",
        captain: req.captain
    });
}

module.exports.logoutCaptain = async (req, res, next) => {
    res.clearCookie("token");
    res.status(200).json({
        message: "Logout successful"
    }); 
}
