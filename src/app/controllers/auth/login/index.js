class Controller {
  getIndex(req, res) {
    res.send({ page: "login" });
  }
}
module.exports = new Controller();
