const express = require('express');

const router = express.Router();

const HomeRoutes = require('./home');
const AboutRoutes = require("./about");

router.use("/api/", HomeRoutes);
router.use("/api/about", AboutRoutes);

module.exports = router