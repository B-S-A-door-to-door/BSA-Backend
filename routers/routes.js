const express = require("express")
const authentication = require("../controllers/authentication")
const userscontroller = require("../controllers/userscontroller")
const invoiceController = require("../controllers/invoiceController")

const router = express.Router();

// authentication routes
router.post("/signUp", authentication.signUp)
router.post("/signIn", authentication.signIn)


//users routes 
router.get("/getAllUsers", authentication.protect,userscontroller.getAllUsers )
router.get("/getUser/:username", authentication.protect,userscontroller.getUserDetails)
router.patch("/updateUser/:username", authentication.protect,userscontroller.updateUser)
router.delete("/deleteUser/:username", authentication.protect,userscontroller.deleteUser)

// invoices routes
router.post("/generateInvoice", authentication.protect,invoiceController.generateInvoice )
router.get("/getAllInvoices", authentication.protect,invoiceController.getAllInvoices)
router.get("/getInvoiceDetails/:refNumber", authentication.protect,invoiceController.getInvoiceDetails)
router.get("/getWorkerInvoices/:username", authentication.protect,invoiceController.getWorkerInvoices)

// dashboard routes
router.get("/dashboard/workers", authentication.protect, userscontroller.getTotalNumberOfWorkers)
router.get("/dashboard/invoices", authentication.protect, invoiceController.getTotalNumberOfInvoices)

module.exports = router;
