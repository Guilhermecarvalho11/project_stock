const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const UsersValidate = require("../controllers/UserValidate");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

const usersController = new UsersController();
const usersValidate = new UsersValidate();

usersRoutes.post("/", usersController.create);
usersRoutes.get("/validated", ensureAuthenticated, usersValidate.index);

module.exports = usersRoutes;
