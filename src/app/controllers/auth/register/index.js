class Controller {
  getIndex(req, res) {
    res.send({ page: "register" });
  }
}
module.exports = new Controller();
