const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app")

dotenv.config({path:"./config.env"});


mongoose
	.connect(process.env.DB, {})
	.then(() =>console.log("Database connection successful!"));


const server = app.listen(process.env.PORT, ()=>{
	console.log(`App running on port ${process.env.PORT}....`);  
});


