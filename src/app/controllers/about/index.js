class Controller {
    getIndex(req, res) {
        res.statusCode = 200;
        res.send({ page: "about" });
    }
}
module.exports = new Controller();