'use strict';

const app = require('./src/server');
const port = process.env.PORT || 5000;

app.listen(port, () => { 'server running on port :' + port });
