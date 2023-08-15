const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express")
const morgan = require("morgan");
const router = require("./routers/routes")


dotenv.config({path:"./config.env"});

const app = express()
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/bsa", router);

mongoose
	.connect(process.env.DB, {})
	.then(() =>console.log("Database connection successful!"));


app.listen(process.env.PORT, ()=>{
	console.log(`App running on port ${process.env.PORT}....`);  
});


