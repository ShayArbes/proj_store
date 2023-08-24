const productsDal = require("../dal/productsDal");

async function getAllProducts() {
  let db = await productsDal.getProducts();
  return db;
}

async function getIdProduct(id) {
  try {
    const user = await productsDal.getIdProduct(id);
    return user;
  } catch (error) {
    return null;
  }
}

async function postProduct(user) {
  try {
    const user_res = await productsDal.postProduct(user);
    return user_res;
  }

  catch (error) {
    return null;
  }
}

async function updateProduct(id, updatedData) {
  try {
    const updateUser = await productsDal.updateProduct(id, updatedData);
    return updateUser;
  } catch (error) {
    return null;
  }
}


async function deleteProduct(id) {
  try {
    const flagDel = await productsDal.deleteProduct(id);
    return flagDel;
  } catch (error) {
    return null;
  }
}

async function incrementQuantity(id) {
  try {
    const updateUser = await productsDal.incrementQuantity(id);
    return updateUser;
  } catch (error) {
    return null;
  }
}

async function decrementQuantity(id) {
  try {
    const updateUser = await productsDal.decrementQuantity(id);
    return updateUser;
  } catch (error) {
    return null;
  }
}


module.exports = { getAllProducts, getIdProduct, postProduct, updateProduct, deleteProduct, incrementQuantity,decrementQuantity };
