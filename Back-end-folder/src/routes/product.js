const express = require("express");
const router = express.Router();
const { requireSignin, adminMiddleware } = require("../common-middleware");
const { createProduct, getProductsBySlug } = require("../controller/product");
const multer = require("multer");
const path = require("path");
const shortid = require("shortid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.post(
  "/product/create",
  requireSignin,
  adminMiddleware,
  upload.array("productPicture"),
  createProduct
);
router.get("/products/:slug", getProductsBySlug);

module.exports = router;
