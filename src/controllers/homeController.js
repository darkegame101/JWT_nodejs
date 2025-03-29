import userService from "../services/userService";

//
const handleHomepage = (req, res) => {
  const name = "Killua";
  return res.render("home.ejs", { name });
};

//
const handleUserpage = async (req, res) => {
  let userList = await userService.getListUsers();
  return res.render("userPage.ejs", { userList });
};

//
const handleCreatNewUser = async (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;

  await userService
    .createNewUser(email, password, username)
    .then(() => {
      console.log("Tạo thành công");
      return res.redirect("/user");
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send("Lỗi khi tạo user");
    });
};

///
const handleDeleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  return res.redirect("/user");
};

//
const getUpdateUserpage = async (req, res) => {
  const id = req.params.id;
  let user = await userService.getUserById(id);
  if (!user) {
    return res.status(404).send("User không tồn tại");
  }
  return res.render("user-update.ejs", { user, id });
};

//
const handleUpdateUser = async (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let id = req.body.id;
  await userService.updateUserInfo(id, email, username).then(() => {
    console.log("Updatded thành công!");
    return res.redirect("/user");
  });
};

module.exports = {
  handleHomepage,
  handleUserpage,
  handleCreatNewUser,
  handleDeleteUser,
  getUpdateUserpage,
  handleUpdateUser,
};
