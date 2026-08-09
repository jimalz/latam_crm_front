import { createUser, getUsers } from "../models/users.model.js";

export const listUsers = async (req, res) => {
  const users = await getUsers();
  res.json(users);
};

export const addUser = async (req, res) => {
  const { email, password, name } = req.body;

  const user = await createUser(email, password, name);
  res.json(user);
};
