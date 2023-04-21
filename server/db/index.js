const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://amanbhagtani:amanbhagtani@cluster0.2tj4b0g.mongodb.net/test"
  )
  .then(() => {
    console.log("connected successfully to db");
  })
  .catch((ex) => {
    console.log(ex);
  });
