const express = require("express");

const router = express.Router();

const HomeRoutes = require("./home");
const AboutRoutes = require("./about");

router.use("/api/home", HomeRoutes);
router.use("/api/about", AboutRoutes);

router.use((req, res) => {
    res.status(404);
    res.send({ success: false, message: "route Not found" });
});

module.exports = router;