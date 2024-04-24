const express = require('express');
const userRoutes = require('./routes/user-routes');
const cors = require('cors');
const meatSeafoodRoutes = require("./routes/meat-seafood-routes");
const beveragesRoutes = require("./routes/beverages");
const dairyEggsRoutes = require("./routes/dairy-eggs");
const fruitsVegetablesRoutes = require("./routes/fruits-vegetables");
const pantryStaplesRoutes = require("./routes/pantry-staples");

const app = express();

// Enable CORS for all requests
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/meat-seafood', meatSeafoodRoutes);
app.use('/api/v1/fruit-vegetables', fruitsVegetablesRoutes);
app.use('/api/v1/dairy-eggs', dairyEggsRoutes);
app.use('/api/v1/pantry-staples', pantryStaplesRoutes);
app.use('/api/v1/beverages', beveragesRoutes);

// Start server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
