import express from "express";
import homeController from "../controllers/homeController.js"; // Import cả object
const router = express.Router();
/**
 * @param {*} app =express app
 */
const initwebRouters = (app) => {
  //GET
  router.get("/", homeController.handleHomepage); // Truy cập từ object
  router.get("/user", homeController.handleUserpage);
  router.get("/update-user/:id", homeController.getUpdateUserpage);
  router.get("/about", (req, res) => {
    return res.send("Myself hi blog");
  });
  ///POST
  router.post("/users/creat-user", homeController.handleCreatNewUser);
  router.post("/delete-user/:id", homeController.handleDeleteUser);
  router.post("/user/update-user",homeController.handleUpdateUser);
  return app.use("/", router);
};

export default initwebRouters;
