import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByEmail, createUserRecord } from "../models/auth.model.js";

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret_key";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  const existing = await findUserByEmail(email);
  if (existing) {
    return res.status(400).json({ error: "Email already exists" });
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await createUserRecord(email, hashed, name);

  res.json(user);
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);
  if (!user) {
    return res.status(400).json({ error: "Invalid email or password" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ error: "Invalid email or password" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
};
