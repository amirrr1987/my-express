class Controller {
  getIndex(req, res) {
    res.send({ page: "home" });
  }
}
module.exports = new Controller();