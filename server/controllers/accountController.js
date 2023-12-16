const User = require("../models/UserModel");

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//get all Users

const getAllUsers = async (req, res) => {
  
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
};

//get User

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).lean();

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

//update user's info
const updateUser = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;
    const id = req.user.id;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      const user = await User.findByIdAndUpdate(
        id,
        { fullName, email, password: hash, role },
        {
          new: true,
        }
      );
      res.status(200).json(user);
    } else {
      const user = await User.findByIdAndUpdate(
        id,
        { fullName, email, role },
        {
          new: true,
        }
      );
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

//delete a user
const deleteUser = async (req, res) => {
  try {
    if (req.user.role == "admin") {
      const id = req.params.id;
      const user = await User.findByIdAndRemove(id, {
        new: true,
      });
      res.status(200).json({ message: "User deleted ", user });
    } else {
      res.status(400).json({ error: "Acces to endpoint not allowed " });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { getAllUsers, updateUser, deleteUser, getUser };
