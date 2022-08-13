const express = require('express');
const router = express.Router();

const controllers = require('../../controllers');


router.get("/", controllers.HomeController.getIndex);
router.post("/", controllers.HomeController.postIndex);


module.exports = router