const mongoose = require("mongoose");

const schemaPersonal = new mongoose.Schema({
    image: { type: String, required: true, default: "" },
    fName: { type: String, required: true, default: "" },
    lName: { type: String, required: true, default: "" },
    title: { type: String, required: true, default: "" },
    subTitle: { type: String, required: true, default: "" },
    about: { type: String, required: true, default: "" },
    contact: { type: Array, required: true, default: [{ title: "", icon: "" }] },
    skillSummary: { type: [String], required: true, default: [""] },
    education: { type: String, required: true, default: "" },
    techExperience: { type: [String], required: true, default: [""] },
    softwareKnowledge: {
        type: Array, required: true, default: [{
            title: { type: String, required: true, default: "" },
            skills: { type: Array, required: true, default: [""] },
        }]
    },
    experience: {
        type: Array, required: true, default: [{
            title: { type: String, required: true, default: "" },
            skills: { type: Array, required: true, default: [""] },
            summary: { type: String, required: true, default: "" },
        }]
    },
    social: { type: Array, required: true, default: [{ title: "", icon: "", link: "" }] },

});

const usePersonalModel = mongoose.model("personal", schemaPersonal);

module.exports = usePersonalModel;