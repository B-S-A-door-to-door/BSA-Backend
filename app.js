const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routers/routes");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/bsa", router);

// handling global errors
app.use(globalErrorHandler);

module.exports = app;
