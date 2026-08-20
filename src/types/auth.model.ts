import client from "../../db/client.js";

export const findUserByEmail = async (email) => {
  const result = await client.query(
    `SELECT * FROM users WHERE email = $1`,
    [email]
  );
  return result.rows[0];
};

export const createUserRecord = async (email, hashedPassword, name) => {
  const result = await client.query(
    `INSERT INTO users (email, password, name)
     VALUES ($1, $2, $3)
     RETURNING id, email, name, created_at`,
    [email, hashedPassword, name]
  );
  return result.rows[0];
};
