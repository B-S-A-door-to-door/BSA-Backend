const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = require("./app");

mongoose.connect(process.env.DB, {}).then(() => {
  if (process.env.NODE_ENV === "development")
    console.log("Database connection successful!");
}); 

const server = app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}....`);
});
