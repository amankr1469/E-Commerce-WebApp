//Function to create token and save in cookie-
const sendToken = (user, statusCode, res) => {

    const token = user.getJWTToken();
    console.log(token, "jetToken");

    //options for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        )
    };

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        user,
        token,
    }); 
};

module.exports = sendToken;