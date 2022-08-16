const Joi = require("joi");
const models = require("../../models");

class Controller {
    async getAll(req, res) {
        const resualt = await models.usePersonalModel
            .find()
            .sort({ _id: 1 })
        res.statusCode = 200;
        res.send(resualt);
    }
    async postAll(req, res) {
        const { body } = req;
        let obj = {
            image: body.image,
            fName: body.fName,
            lName: body.lName,
            title: body.title,
            subTitle: body.subTitle,
            about: body.about,
            contact: body.contact,
            skillSummary: body.skillSummary,
            education: body.education,
            techExperience: body.techExperience,
            softwareKnowledge: body.softwareKnowledge,
            experience: body.experience,
            social: body.social,
        }
        const schema = Joi.object({
            image: Joi.string().min(3).max(30).message("image must be between 3 and 30 characters"),
            fName: Joi.string().min(3).max(30).message("fName must be between 3 and 30 characters"),
            lName: Joi.string().min(3).max(30).message("lName must be between 3 and 30 characters"),
            title: Joi.string().min(3).max(30).message("title must be between 3 and 30 characters"),
            subTitle: Joi.string().min(3).max(30).message("subTitle must be between 3 and 30 characters"),
            about: Joi.string().min(3).max(30).message("about must be between 3 and 30 characters"),
            contact: Joi.array(),
            skillSummary: Joi.array(),
            education: Joi.string().min(3).max(3000).message("education must be between 3 and 30 characters"),
            techExperience: Joi.array(),
            softwareKnowledge: Joi.array(),
            experience: Joi.array(),
            social: Joi.array()
        });

        const newPersonal = models.usePersonalModel(obj)

        try {
            await schema.validateAsync(obj);
        }
        catch (err) {
            console.log("error:", "vaidation error");
            res.send({ error: err.message });
        }

        try {
            await newPersonal.save()
            res.send(newPersonal);
        }
        catch (err) {
            console.log("error:", "save error");
            res.send({ error: err.message });
        }

    }

}


module.exports = new Controller();