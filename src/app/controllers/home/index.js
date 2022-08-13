const Joi = require("joi");
const models = require("../../models");
class Controller {

    async getIndex(req, res) {
        // const list = await models.useHomeModel.find({complete: false}).limit(2).sort({ _id: 1 }).select({ _id: 1, __v: 1 });
        const list = await models.useHomeModel.find({
            price: {
                // $gte: 200000,
                // $lte: 400000,
                // $nin: [400000],
                $in: [400000]
            }
        })
        res.send(list)

    }

    async postIndex(req, res) {
        const { body } = req;
        let obj = {
            title: body.title,
            description: body.description,
            link: body.link,
            name: body.name,
            complete: body.complete,
            price: body.price,
        }

        const schema = Joi.object({
            title: Joi.string().min(3).max(10).message("title must be between 3 and 10 characters"),
            name: Joi.string().min(3).max(10).message("name must be between 3 and 10 characters"),
            description: Joi.string().min(3).max(10).message("description must be between 3 and 10 characters"),
            link: Joi.string().min(3).max(10).message("link must be between 3 and 10 characters"),
            complete: Joi.boolean().required(),
            price: Joi.number().required()
        });

        const newHome = models.useHomeModel(obj)

        try {
            await schema.validateAsync(obj);
            await newHome.save()
            res.send(newHome);
        }
        catch (err) {
            res.send({ error: err.message });
        }
    }
}
module.exports = new Controller();