import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import bluebird from "bluebird";
import db from "../models/index";
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
  let users = [];
  users = await db.User.findAll();
  return users;
  // const [rows, fields] = await connection.execute("SELECT * FROM users");
  // return rows;
};

///
const hashPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

///
const createNewUser = async (email, password, username) => {
  let hashPass = hashPassword(password);
  try {
    await db.User.create({
      username: username,
      password: hashPass,
      email: email,
    });
  } catch (error) {
    console.log("-->Check error:", error);
  }
};

///
const deleteUser = async (userId) => {
  await db.User.destroy({
    where: { id: userId },
  });
  // try {
  //   const [rows, fields] = await connection.execute(
  //     "DELETE FROM users WHERE id=?",
  //     [id]
  //   );
  //   return rows;
  // } catch (error) {
  //   console.log("Check error-->", error);
  // }
};

///
const getUserById = async (id) => {
  let user = {};
  user = await db.User.findOne({ where: { id: id } });
  return user;

  // try {
  //   const [rows, fields] = await connection.execute(
  //     "SELECT * FROM users WHERE id = ?",
  //     [id]
  //   );
  //   return rows[0];
  // } catch (error) {
  //   console.log(error);
  // }
};

const updateUserInfo = async (id, email, username) => {
  await db.User.update(
    { email: email, email: username },
    {
      where: {
        id: id,
      },
    }
  );
  // try {
  //   const [result] = await connection.execute(
  //     "UPDATE users SET email = ?, username = ?,updatedAt = NOW() WHERE id = ?",
  //     [email, username, id]
  //   );
  // } catch (error) {
  //   console.error("Error updating user:", error);
  // }
};

module.exports = {
  createNewUser,
  getListUsers,
  deleteUser,
  getUserById,
  updateUserInfo,
};
