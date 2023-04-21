const express = require("express");
const User = require("../schema/userSchema");

exports.CreateUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("name, email, password: ", name, email, password);
  const oldUser = await User.findOne({ email });
  if (oldUser) return res.status(401).json({ error: "user already exists" });
  const newUser = new User({
    name,
    email,
    password,
  });
  newUser.save();
  res.status(201).json({ user: { name, email, password } });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const verifyEmail = await User.findOne({ email });
  if (!verifyEmail) return res.status(401).json({ error: "email is wrong" });

  const user = await User.findOne({ email });
  if (user.password !== password)
    return res.status(401).json({ error: "password is wrong" });
  res.status(201).json({ user: { email, password } });
};

exports.updatePassword = async (req, res) => {
  const { email, password, newPassword } = req.body;
  console.log("email, password, newPassword: ", email, password, newPassword);
  const verifyEmail = await User.findOne({ email });
  if (!verifyEmail) return res.status(401).json({ error: "email is wrong" });
  const user = await User.findOne({ email });
  if (user.password !== password)
    return res.status(401).json({ error: "old password is wrong" });
  const userUpdatedSuccesfully = await User.findOneAndUpdate(
    { email },
    { password: newPassword },
    { new: true }
  );
  res.status(201).json({ message: "password updated successfully" });
};

exports.deleteUser = async (req, res) => {
  const { email } = req.body;
  const verifyEmail = await User.findOne({ email });
  if (!verifyEmail)
    return res.status(401).json({ error: "email is wrong/user not found" });
  await User.findOneAndDelete({ email });
  res.status(201).json({ message: "user deleted successfully" });
};
