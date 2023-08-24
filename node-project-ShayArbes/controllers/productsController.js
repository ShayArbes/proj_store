const productsService = require("../services/productsService");

async function getProducts(req, res) {
  const products = await productsService.getAllProducts();
  res.json(products);
}

async function getIdProduct(req, res) {
  const products = await productsService.getIdProduct(req.params.id);
  if (!products) {
    res.sendStatus(404);
  } else {
    res.json(products);
  }
}

async function postProduct(req, res) {
  const product = ({
    title,
    description,
    price,
    category,
    image,
    quantity,
    rating,
  } = req.body);

  if (!product.title || !product.price || price < 0) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const products = await productsService.postProduct(product);
  if (!products) {
    res.sendStatus(404);
  } else {
    res.status(200).send();
  }
}

async function updateProduct(req, res) {
  const updated = await productsService.updateProduct(req.params.id, req.body);
  if (!updated) {
    res.sendStatus(404);
  } else {
    res.status(200).send();
  }
}

async function deleteProduct(req, res) {
  const flagDel = await productsService.deleteProduct(req.params.id);
  if (!flagDel) {
    res.sendStatus(404);
  } else {
    res.status(200).send();
  }
}

async function incrementQuantity(req, res) {
  const updateUser = await productsService.incrementQuantity(req.params.id);
  console.log("con : " + updateUser);
  if (!updateUser) {
    res.sendStatus(404);
  } else {
    res.status(200).send();
  }
}

async function decrementQuantity(req, res) {
  const updateUser = await productsService.decrementQuantity(req.params.id);
  if (!updateUser) {
    res.sendStatus(404);
  } else {
    res.status(200).send();
  }
}

module.exports = {
  getProducts,
  getIdProduct,
  postProduct,
  updateProduct,
  deleteProduct,
  incrementQuantity,
  decrementQuantity,
};
