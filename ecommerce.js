// ecommerce.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// ✅ Directly define schema here
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
});
const Product = mongoose.model('Product', productSchema);

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// ✅ Routes
app.post('/api/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).send(product);
});

app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
