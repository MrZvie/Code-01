// controllers/userController.js

// Sample data (in-memory)
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// Get all users
const getUsers = (req, res) => {
  res.json(users);
};

// Get user by ID
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

// Add new user
const createUser = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Name is required' });

  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
};

module.exports = { getUsers, getUserById, createUser };
