const Router = require("express");
const router = new Router();
const personController = require("../controller/person.controller");
const ctrlWrapper = require("../helpers/ctrlWrapper");

router.post("/players/create", ctrlWrapper(personController.createPerson));
router.get("/players", ctrlWrapper(personController.getPersons));
router.delete("/players/:id", ctrlWrapper(personController.deletePerson));

module.exports = router;
