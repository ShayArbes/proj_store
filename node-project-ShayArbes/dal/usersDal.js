const jsonfile = require("jsonfile");
const path = require("node:path");
const axios = require("axios");
const lodash = require("lodash");

let db = jsonfile.readFileSync(path.join(__dirname, "dbUsers.json"));
//------------------------------------------------------------------------
//Loading the data from the api to the file
// async function loadingData() {
//   try {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     db = response.data.map((ele) => {
//       return { ...ele, quantity: lodash.random(100) };
//     });
//     saveToFile(db);
//   } catch (error) {
//     console.error(error);
//   }
// }

//--------------------------------------------------------------------------
async function getUser() {
  db = jsonfile.readFileSync(path.join(__dirname, "db.json"));
  return db;
}
async function signingUp(newUser){
    console.log(db);
    db.push(newUser);
    saveToFile(db);
    return newUser;
}
const saveToFile = (db) => {
    jsonfile.writeFileSync(path.join(__dirname, "dbUsers.json"), db);
  };
  async function login(user) {
    const userAuthentication = db.find((u) => {
        return user.email === u.email;
      });
      return userAuthentication;
  }

module.exports = {
  getUser,signingUp,login
};