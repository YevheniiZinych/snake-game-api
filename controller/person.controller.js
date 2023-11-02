const db = require("../db");

class PersonController {
  async createPerson(req, res) {
    const { name, point } = req.body;
    try {
    } catch (error) {}
  }

  async getPersons(req, res) {
    const users = await db.query("SELECT * FROM players");
    res.status(200).json(users.rows);
  }

  async deletePerson(req, res) {
    const id = req.params.id;
    const user = await db.query("DELETE FROM players where id = $1", [id]);
    res.json(user.rows[0]);
  }
}

module.exports = new PersonController();
