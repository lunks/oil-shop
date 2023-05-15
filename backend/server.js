const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const productRoutes = require('./routes/products');

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on port ${process.env.PORT || 3001}.`);
});
