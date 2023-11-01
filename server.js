const express = require("express");
const personRouter = require("./routes/person.routes");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use("/api", personRouter);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
