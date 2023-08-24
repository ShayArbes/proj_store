const usersDal = require("../dal/usersDal");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const saltRounds = 10;

async function getAllUsers() {
  let db = await usersDal.getProducts();
  return db;
}

async function signingUp(newUser) {
  try {
    const hash = bcrypt.hashSync(newUser.password, saltRounds);
    newUser.password = hash;
    newUser.id = uuidv4();
    const updateUser = await usersDal.signingUp(newUser);
    return updateUser;
  } catch (error) {
    return null;
  }
}
async function login(user) {
  try {
    const loginUser = await usersDal.login(user);
    let user_ = bcrypt.compareSync(user.password,loginUser.password);
    return user_;
  } catch (error) {
    return null;
  }
}

module.exports = { getAllUsers, signingUp, login };
