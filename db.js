require("dotenv").config();
const url = require("url");
const Pool = require("pg").Pool;

const params = url.parse(process.env.DB_URL);
const auth = params.auth.split(":");

const pool = new Pool({
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  ssl: true,
});

module.exports = pool;
