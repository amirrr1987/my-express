class homeController {
  getIndex(req, res) {
    res.send({ name: "Amir Maghami" });
  }
}
module.exports = new homeController();
