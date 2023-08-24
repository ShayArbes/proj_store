const usersService = require("../services/usersService");
const validator = require("validator");

async function getUsers(req, res) {
  const products = await usersService.getAll();
  res.json(products);
}
async function signingUp(req, res) {
  const { email, password, isAdmin = false } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const isValidEmail = validator.isEmail(email);
  const isValidPassword = validator.isStrongPassword(password, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minSymbols: 0,
  });
  if (!isValidEmail) {
    return res.status(403).json({ error: "Invalid email" });
  }
  if (!isValidPassword) {
    return res.status(403).json({ error: "Invalid password" });
  }
  const newUser = { email, password, isAdmin };

  const user = await usersService.signingUp(newUser);

  res.json(user);
}
async function login(req, res) {
  const user = ({ email, password } = req.body);
  if (!user.email || !user.password) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const flagUser = await usersService.login(user);
  if (!flagUser) {
    res.sendStatus(404);
  } else {
    res.status(200).send();
  }
}

module.exports = {
  getUsers,
  signingUp,login
};
