const Invoices = require("../models/invoice");
const Users = require("../models/users");
const { create } = require("pdf-creator-node");
const fs = require("fs");
const path = require("path");
const os = require("os");

// Creates new invoice
exports.generateInvoice = async (req, res, next) => {
  try {
    const results = await Invoices.create({
      username: req.user.username,
      refNumber: req.body.refNumber,
      orgId: req.user.orgId,
      senderName: req.body.senderName,
      senderContact: req.body.senderContact,
      senderLocation: req.body.senderLocation,
      receiverName: req.body.receiverName,
      receiverContact: req.body.receiverContact,
      receiverLocation: req.body.receiverLocation,
      items: req.body.items,
    });

    if (results) {
      res.status(201).json({
        status: "success",
        message: "Successfully generated an invoice",
        data: {
          invoice: results,
        },
      });
      const worker = await Users.find({ username: req.user.username });

      if (worker) {
        worker[0].invoices.push(results._id);
        await worker[0].save({ validateBeforeSave: false });
      }
      return;
    }

    res.status(400).json({
      status: "fail",
      message: "Invoice generation failed.",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An error occured, try again",
    });
    next(error);
  }
};

// get all invoices
exports.getAllInvoices = async (req, res, next) => {
  try {
    const skip = req.params.skip;
    const limit = req.params.limit;
    const offset = skip * limit;
    const result = await Invoices.find({ orgId: req.user.orgId })
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit);

    if (result) {
      return res.status(200).json({
        status: "success",
        message: "Successfully retrieved invoices",
        results: result.length,
        data: {
          result,
        },
      });
    }

    return res.status(404).json({
      status: "fail",
      message: "No invoice found",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An Error occured, try again.",
    });
    next(error);
  }
};

exports.downloadInvoices = async (req, res) => {
  try {
    const invoices = req.body;

    const htmlTemplatePath = "../templates/invoice_print.html";

    const html = fs.readFileSync(htmlTemplatePath, "utf-8");
    const options = {
      format: "A4",
      orientation: "portrait",
      border: "10mm",
      header: { height: "0mm" },
    };

    const docSavePath = path.join(os.tmpdir(), "invoices.pdf");
    const document = {
      html: html,
      data: {
        invoices,
      },
      path: docSavePath,
    };

    await create(document, options);
    console.log("pdf created");

    const data = fs.readFileSync(docSavePath);
    const base64data = data.toString("base64");
    return res.status(200).json({
      base64data,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Invoice download failed",
    });
  }
};

// get invoice details
exports.getInvoiceDetails = async (req, res, next) => {
  try {
    const result = await Invoices.find({
      refNumber: req.params.refNumber,
      orgId: req.user.orgId,
    });

    if (result.length !== 0) {
      return res.status(200).json({
        status: "success",
        message: "Successfully retrieved invoice details",
        data: {
          result,
        },
      });
    }
    return res.status(400).json({
      status: "fail",
      message: "No invoice found",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An Error occured, try again.",
    });
    next(error);
  }
};

// get worker's invoices
exports.getWorkerInvoices = async (req, res, next) => {
  try {
    const result = await Invoices.find({
      username: req.params.username,
      orgId: req.user.orgId,
    });

    if (result.length !== 0) {
      return res.status(200).json({
        status: "success",
        message: `Successfully retrieved ${req.params.username}'s invoice`,
        results: result.length,
        data: {
          result,
        },
      });
    }

    return res.status(400).json({
      status: "fail",
      message: `No invoice found for ${req.params.username}`,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An Error occured, try again.",
    });
    next(error);
  }
};

// get total number of invoices
exports.getDashboardData = async (req, res, next) => {
  try {
    const invoicesData = await Invoices.find({ orgId: req.user.orgId });
    let workersData = await Users.find({
      orgId: req.user.orgId,
      isAdmin: false,
    });
    workersData.sort((a, b) => b.invoices.length - a.invoices.length);
    workersData = workersData.filter((worker) => worker.invoices.length !== 0);

    // Get the top five workers
    const topFiveWorkers = workersData.slice(0, 5);

    if (invoicesData || workersData) {
      return res.status(200).json({
        status: "success",
        message: "Successfully retrieved dashboard data",
        invoices: invoicesData.length,
        workers: workersData.length,
        topFiveWorkers,
      });
    }

    return res.status(404).json({
      status: "fail",
      message: "Failed whiles retrieving dashboard data",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An Error occured, try again.",
    });
    next(error);
  }
};
