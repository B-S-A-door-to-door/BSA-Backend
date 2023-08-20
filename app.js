const express = require("express")
const morgan = require("morgan");
const router = require("./routers/routes")
const globalErrorHandler = require('./controllers/errorController')

const app = express()
app.use(morgan("dev"));
app.use(express.json());


// routes
app.use("/api/bsa", router);

// handling global errors
app.use(globalErrorHandler)


module.exports = app