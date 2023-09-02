const express = require("express");
const authentication = require("../controllers/authentication");
const userscontroller = require("../controllers/userscontroller");
const invoiceController = require("../controllers/invoiceController");

const router = express.Router();

//  TEMP ROUTE FOR CRETING AN ADMIN
// router.get("/admin/create", userscontroller.createAdmin);

// authentication routes
router.post(
  "/admin/signUp",
  authentication.protect,
  authentication.restrictTo,
  authentication.signUp
);

router.post("/signIn", authentication.signIn);

router.patch(
  "/admin/settings",
  authentication.protect,
  authentication.restrictTo,
  authentication.settings
);

//users routes
router.get(
  "/admin/getAllUsers",
  authentication.protect,
  authentication.restrictTo,
  userscontroller.getAllUsers
);
router.get(
  "/getUser/:username",
  authentication.protect,
  userscontroller.getUserDetails
);
router.patch(
  "/admin/updateUser/:username",
  authentication.protect,
  authentication.restrictTo,
  userscontroller.updateUser
);
router.delete(
  "/admin/deleteUser/:username",
  authentication.protect,
  authentication.restrictTo,
  userscontroller.deleteUser
);

// invoices routes
router.post(
  "/generateInvoice",
  authentication.protect,
  invoiceController.generateInvoice
);
router.get(
  "/admin/getAllInvoices",
  authentication.protect,
  authentication.restrictTo,
  invoiceController.getAllInvoices
);
router.post(
  "/admin/downloadInvoices",
    // authentication.protect,
    // authentication.restrictTo,
  invoiceController.downloadInvoices
);
router.get(
  "/getInvoiceDetails/:refNumber",
  authentication.protect,
  invoiceController.getInvoiceDetails
);
router.get(
  "/getWorkerInvoices/:username",
  authentication.protect,
  invoiceController.getWorkerInvoices
);

// dashboard routes
router.get(
  "/admin/dashboard",
  authentication.protect,
  authentication.restrictTo,
  invoiceController.getDashboardData
);

module.exports = router;
