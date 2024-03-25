const { Router } = require("express");
const usersRoutes = Router();
const UsersController = require("../controllers/UsersController");
const usersController = new UsersController();

function myMiddleware(request, response, next) {
  next();
}

usersRoutes.post("/", myMiddleware, usersController.create);

usersRoutes.put("/:id", usersController.update);

usersRoutes.delete("/users", myMiddleware, (request, response) => {});

module.exports = usersRoutes;
