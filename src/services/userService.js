import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import bluebird from "bluebird";
const salt = bcrypt.genSaltSync(10);

//
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "jwt",
  waitForConnections: true,
  connectionLimit: 1000,
  maxIdle: 30,
  Promise: bluebird,
});

///
const getListUsers = async () => {
  const [rows, fields] = await connection.execute("SELECT * FROM users");
  return rows;
};

///
const hashPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

///
const createNewUser = async (email, password, username) => {
  let hashPass = hashPassword(password);
  // pass value into database
  const [rows, fields] = await connection.execute(
    "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
    [email, username, hashPass]
  );
};

///
const deleteUser = async (id) => {
  try {
    const [rows, fields] = await connection.execute(
      "DELETE FROM users WHERE id=?",
      [id]
    );
    return rows;
  } catch (error) {
    console.log("Check error-->", error);
  }
};

///
const getUserById = async (id) => {
  try {
    const [rows, fields] = await connection.execute(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};

const updateUserInfo = async (id, email, username) => {
  try {
    const [result] = await connection.execute(
      "UPDATE users SET email = ?, username = ? WHERE id = ?",
      [email, username, id]
    );
  } catch (error) {
    console.error("Error updating user:", error);
  }
};


module.exports = {
  createNewUser,
  getListUsers,
  deleteUser,
  getUserById,
  updateUserInfo,
};
