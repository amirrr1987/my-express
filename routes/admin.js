const express = require('express');
const router = express.Router();
const path = require('path')

router.get('/', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '../views/admin/index.html'));
})


module.exports = router;