class Controller {
  getIndex(req, res) {
    res.send({ page: "about" });
  }
}
module.exports = new Controller();
