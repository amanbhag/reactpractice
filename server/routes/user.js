const express = require("express");
const {
  CreateUser,
  login,
  updatePassword,
  deleteUser,
} = require("../controller/user");
const router = express.Router();

router.post("/user/register", CreateUser);
router.post("/user/login", login);
router.post("/user/password", updatePassword);
router.post("/user/deleteuser", deleteUser);

// router.get("/user/login", (req, res) => {
//   res.status(201).json({ user: "umesh" });
// });

module.exports = router;
