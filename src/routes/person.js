const express = require("express");
const personRouter = express.Router();
const Person = require("../models/person");

//create a person and save it
//req.body
//method POST

//
//

personRouter.post("/xx", async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    let result = await newPerson.save();
    res.send({ result: result, msg: "user adedd" });
  } catch (error) {
    console.log(error);
  }
});
module.exports = personRouter;