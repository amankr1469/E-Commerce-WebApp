const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');

//Register a User
exports.registerUser = catchAsyncErrors(async(req, res, next)=>{

    const {name, email, password} = req.body;
    const user = await User.create({
        name, email, password,
        avatar:{
            public_id: "this is sample id",
            url: "url"
        }
    });

    //Calling the function we created to generate token and save in cookie
    sendToken(user, 201, res);
});

//Login User
exports.loginUser = catchAsyncErrors(async(req, res, next) =>{

    const {email, password} = req.body;

    //Checking if the user has given email and password
    if(!email || !password){
        return next(new ErrorHandler("Please enter your email and password", 400));
    }

    //Searching user. Selecting password separately because by default it doesn't fetch password.
    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid username or password", 401));
    }

    const isPasswordMatched = user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid username or password", 401));
    }

    sendToken(user, 200, res);
})

//LogOut User 
exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message:"Logged Out",
    });
});

//Forgot Password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    
    const user = await User.findOne({ email:req.body.email });

    if(!user){
        return next(new ErrorHandler("User not found", 404));
    }

    //Get Reset Password Token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl}`;

    try{
        await sendEmail({
            email: user.email,
            subject: `Laxmi Cheet Fund`,
            message, 
        });

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`,
        });
    } catch(error){
        user.resetPasswordToken = undefined;
        user.resetPasswordexpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500));
    }
});

//Reset Password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    //Creating token hash
    const resetPasswordToken = crypto
       .createHash("sha256")
       .update(resetToken)
       .digest("hex");

    const user = await User.findOne({
        resetPasswordToken: resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
        return next(new ErrorHandler("Reset Password Token Invalid or Expired", 400));
    }

    if(req.body.password === req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not match", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res);
});

//Get User Details
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });
});

//Update password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findById(req.user.id).select('+password');

    const isPasswordMatched = user.comparePassword(req.body.oldPassword);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Old password is not matched", 400))
    }
    
    if(req.body.newPassword === req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not match", 400));
    }

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user, 200, res);
});

//Update Profile
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {

    const newUserData = {
        name: req.body.name,
        email: req.body.email
    };
    const user = await User.findByIdAndUpdate(req.body.id, newUserData, {
        new:true,
        runValidators: true,
        useFindAndModify: true
    });

    res.status(200).json({
        success: true,
    })
});

//Get all users -- Admin
exports.getAllUsers = catchAsyncErrors (async (req, res, next) => {

    const users = await User.find();

    res.status(200).json({
        success: true,
        users,
    });
});

//Get single user -- Admin
exports.getSingleUser = catchAsyncErrors (async (req, res, next) => {

    const user = await User.findById(req.params.id);

    if(!user){
        return next(new ErrorHandler(`User doeas not exist with Id ${req.params.id}`));
    }

    res.status(200).json({
        success: true,
        user,
    })
});

//Update Role of User
exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {

    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    };

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new:true,
        runValidators: true,
        useFindAndModify: true
    });

    res.status(200).json({
        success: true,
    })
});

//Delete the user -- Admin
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    
    const user = await User.findById(req.params.id);

    if(!user) {
        return next(new ErrorHandler('User not found', 400));
    }

    await user.deleteOne({_id: req.params.id});

    res.status(200).json({
        success: true,
        message: 'User deleted successfully',
    });
});

