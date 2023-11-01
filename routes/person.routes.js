const Router = require("express");
const router = new Router();
const personController = require("../controller/person.controller");

router.post("/players", personController.createPerson);
router.get("/players", personController.getPersons);
router.delete("/players/:id", personController.deletePerson);

module.exports = router;
