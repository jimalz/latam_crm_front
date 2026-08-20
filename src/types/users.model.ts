import client from "../../db/client.js";

export const createUser = async (email, password, name) => {
  const result = await client.query(
    `INSERT INTO users (email, password, name)
     VALUES ($1, $2, $3)
     RETURNING id, email, name, created_at`,
    [email, password, name]
  );
  return result.rows[0];
};

export const getUsers = async () => {
  const result = await client.query(
    `SELECT id, email, name, created_at FROM users`
  );
  return result.rows;
};
