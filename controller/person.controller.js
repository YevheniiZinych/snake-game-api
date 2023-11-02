const db = require("../db");

class PersonController {
  async createPerson(req, res) {
    const { name, point } = req.body;
    const newPerson = await db.query(
      "INSERT INTO players (name) values ($1, $2) RETURNING *",
      [name, point]
    );
    res.status(200).json(newPerson.rows[0]);
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
