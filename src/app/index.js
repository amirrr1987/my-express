const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
module.exports = class Application {
  constructor() {
    this.serverConfig();
    this.databaseConfig();
    this.setConfig();
    this.setRoutes();
  }
  serverConfig() {
    app.listen(port, () => {
      console.log("Server is running on port: " + port);
    });
  }
  async databaseConfig() {
    await mongoose.connect("mongodb://localhost/my-app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  setConfig() {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
  }
  setRoutes() {
    app.use(require("./routes"));
  }
};
