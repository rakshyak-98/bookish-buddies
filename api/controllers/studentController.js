const studentModel = require("../model/studentModel");

function createStudent(data) {
    let validKey = ["name", "email"];

    for (let key of validKey) {
        if (key in data) continue;
        else throw new Error(`Invalid Key ${key}`);
    }

    studentModel.create(data);
}

module.exports = { createStudent };
