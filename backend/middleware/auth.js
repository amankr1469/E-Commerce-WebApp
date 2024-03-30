const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('./catchAsyncErrors');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
//     const {token} = req.cookies;
//     console.log(token, "auth");
    
//     if(!token) {
//         return next(new ErrorHandler("Please Login to access this resource", 401))
//     }

//     const decodedData = jwt.verify(token, process.env.JWT_SECRET);

//     req.user = await User.findById(decodedData.id); 
//     next();
// }) 

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        return next(new ErrorHandler("Please provide a valid token", 401));
    }

    const token = authorizationHeader.split(' ')[1];

    try {
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decodedData.id);
        next();
    } catch (error) {
        return next(new ErrorHandler("Invalid or expired token", 401));
    }
});


exports.authorizeRoles = (...roles) =>{

    return (req, res, next) =>{
        //Checking is role we getting matches the role in user.role
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(
                `Role: ${req.user.role} is not allowed.`, 403
            ));
        }

        next();
    };
}