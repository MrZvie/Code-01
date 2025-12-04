const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes'); // add this

const app = express();

connectDB();

app.use(express.json());

// register routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Backend training server is running ✔️');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
