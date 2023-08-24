const express = require('express');
var morgan = require('morgan')
const productsDal = require("./dal/productsDal");

const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');

const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.use(productsRouter);
app.use(usersRouter);
app.listen(3000, () => {
  console.log("Server started on port 3000")
  productsDal.loadingData();
});