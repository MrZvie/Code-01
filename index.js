const express = require('express');
const app = express();
app.use(express.json());

// Import user routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Backend training server is running ✔️');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
