const express = require('express');

const router = express.Router();

const HomeRoutes = require('./home');

router.use('/', HomeRoutes);

module.exports = router