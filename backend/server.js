const app = require('./app');
const {config} = require('dotenv');
const cloudinary = require('cloudinary');
const connectDatabase = require("./config/database")

//Handling Uncaught Exceptions
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down server due to Uncaught Exception`);

    process.exit(1);
})

//Connecting to .env file (path to .env file)
config({path:"backend/config/config.env"});

//Connecting to Database
connectDatabase()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  

// Creating server and listening (PORT, callback fun())
const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port http://localhost:${process.env.PORT}`);
}) 

//Unhandled Promise Rejection
process.on("unhandledRejecation", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    })
})