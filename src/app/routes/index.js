const express = require("express");

const router = express.Router();

const AuthRoutes = require("./auth");
const HomeRoutes = require("./home");
const AboutRoutes = require("./about");

router.use("/api/auth", AuthRoutes);
router.use("/api/", HomeRoutes);
router.use("/api/about", AboutRoutes);

router.use((req, res) => {
  res.status(404);
  res.send({ success: false, message: "route Not found" });
});

module.exports = router;
