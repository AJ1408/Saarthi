const captainController = require("../controllers/captain.controller");
const express = require('express');
const router = express.Router()

const authMiddleware = require("../middlewares/auth.middleware");

const {body} = require('express-validator');

router.post('/registerCaptain', [
    body("fullname.firstname").notEmpty().withMessage("First name is required"),
    body("fullname.lastname").notEmpty().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
    body("vehicle.color").notEmpty().withMessage("Vehicle color is required"),
    body("vehicle.plate").isLength({ min: 3 }).withMessage("Vehicle plate must be at least 3 characters long"),
    body("vehicle.capacity").isInt({ min: 1 }).withMessage("Vehicle capacity must be at least 1"),  
    body("vehicle.vehicleType").isIn(["car", "bike", "auto"]).withMessage("Vehicle type must be one of: car, bike, auto")
    // body("location.lat").isFloat({ min: -90, max: 90 }).withMessage("Latitude must be between -90 and 90"),
    // body("location.lng").isFloat({ min: -180, max: 180 }).withMessage("Longitude must be between -180 and 180") 
], captainController.registerCaptain);

router.post('/loginCaptain', [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
], captainController.loginCaptain); 


router.get("/profileCaptain", authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get("/logoutCaptain" , authMiddleware.authCaptain, captainController.logoutCaptain);
module.exports = router ;