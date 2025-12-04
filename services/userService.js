const User = require('../models/User');

async function createUser(data) {
  return await User.create(data);
}

async function getUsers() {
  return await User.find();
}

async function getUser(id) {
  return await User.findById(id);
}

async function updateUser(id, data) {
  return await User.findByIdAndUpdate(id, data, { new: true });
}

async function deleteUser(id) {
  return await User.findByIdAndDelete(id);
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
};
