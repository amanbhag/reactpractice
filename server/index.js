const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user");
require("./db/index");
const app = express();
app.use(cors());
const port = 3080;
app.use(express.json());
app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.json({ username: "Flavio" });
});

app.listen(port, () => {
  console.log("connected successfully");
});
