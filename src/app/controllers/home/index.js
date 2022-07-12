const Joi = require("joi");

class Controller {
  getIndex(req, res) {
    const schema = Joi.object({
      name: Joi.string().min(3).max(10).required(),
    });
    const { error } = schema.validate(req.query);
    if (error) {
      res.send({ error: error.message });
    }
    res.send({ query: req.query.name });
  }
}
module.exports = new Controller();
