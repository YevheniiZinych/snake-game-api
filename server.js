const express = require("express");
const cors = require("cors");
require("dotenv").config();

const personRouter = require("./routes/person.routes");
const pool = require("./db");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", personRouter);

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

pool
  .connect()
  .then(() => {
    console.log("Підключено до бази даних PostgreSQL");
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Помилка підключення до бази даних:", error);
  });
