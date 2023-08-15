const express = require("express")
const authentication = require("../controllers/authentication")
const userscontroller = require("../controllers/userscontroller")
const invoiceController = require("../controllers/invoiceController")

const router = express.Router();

// authentication routes
router.post("/signUp", authentication.signUp)
router.post("/signIn", authentication.signIn)


//users routes 
router.get("/getAllUsers", userscontroller.getAllUsers )
router.get("/getUser/:username", userscontroller.getUserDetails)
router.patch("/updateUser/:username", userscontroller.updateUser)
router.delete("/deleteUser/:username", userscontroller.deleteUser)

// invoices routes
router.post("/generateInvoice", invoiceController.generateInvoice )
router.get("/getAllInvoices", invoiceController.getAllInvoices)
router.get("/getInvoiceDetails/:refNumber", invoiceController.getInvoiceDetails)



module.exports = router;
