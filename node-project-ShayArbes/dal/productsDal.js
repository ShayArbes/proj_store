const jsonfile = require("jsonfile");
const path = require("node:path");
const axios = require("axios");
const lodash = require("lodash");
let db;

//------------------------------------------------------------------------
//Loading the data from the api to the file
async function loadingData() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    db = response.data.map((ele) => {
      return { ...ele, quantity: lodash.random(100) };
    });
    saveToFile(db);
  } catch (error) {
    console.error(error);
  }
}

//--------------------------------------------------------------------------
async function getProducts() {
  db = jsonfile.readFileSync(path.join(__dirname, "db.json"));
  return db;
}

async function getIdProduct(id) {
  db = jsonfile.readFileSync(path.join(__dirname, "db.json"));
  const productId = parseInt(id);
  const user = db.find((u) => u.id === productId);
  return user || null;
}

async function postProduct(newUser) {
  db = jsonfile.readFileSync(path.join(__dirname, "db.json"));
  newUser.id = db[db.length - 1].id + 1;
  db.push(newUser);
  saveToFile(db);
  return db;
}

async function updateProduct(id, updatedData) {
  db = jsonfile.readFileSync(path.join(__dirname, "db.json"));
  const userId = parseInt(id);
  const productIndex = db.findIndex((product) => product.id === userId);
  if (productIndex !== -1) {
    db[productIndex] = { ...db[productIndex], ...updatedData };
    saveToFile(db);
    return db[productIndex];
  }
  return null;
}

async function deleteProduct(id) {
  db = jsonfile.readFileSync(path.join(__dirname, "db.json"));
  const userId = parseInt(id);
  const productIndex = db.findIndex((product) => product.id === userId);
  if (productIndex !== -1) {
    db.splice(productIndex, 1);
    saveToFile(db);
    return true;
  }
  return false;
}

async function incrementQuantity(id) {
  db = jsonfile.readFileSync(path.join(__dirname, "db.json"));
  const userId = parseInt(id);
  const productIndex = db.findIndex((product) => product.id === userId);
  console.log(productIndex);
  if (productIndex !== -1) {
    console.log(db[productIndex].quantity);
    db[productIndex].quantity++;
    console.log(db[productIndex].quantity);
    saveToFile(db);
    return db[productIndex];
  }
  return null;
}
async function decrementQuantity(id) {
  db = jsonfile.readFileSync(path.join(__dirname, "db.json"));
  const userId = parseInt(id);
  const productIndex = db.findIndex((product) => product.id === userId);
  if (productIndex !== -1) {
    db[productIndex].quantity--;
    saveToFile(db);
    return db[productIndex];
  }
  return null;
}

const saveToFile = (db) => {
  jsonfile.writeFileSync(path.join(__dirname, "db.json"), db);
};

module.exports = {
  getProducts,
  getIdProduct,
  postProduct,
  updateProduct,
  deleteProduct,
  incrementQuantity,
  decrementQuantity,
  loadingData,
};
