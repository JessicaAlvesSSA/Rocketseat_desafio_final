const { Router } = require("express");

const usersRoutes = require("./users.routes");
const dishsRoutes = require("./dishs.routes");
const ingredientsRoutes = require("./ingredients.routes");

const routes = Router();
routes.use("/users", usersRoutes);
routes.use("/dishs", dishsRoutes);
routes.use("/ingredients", ingredientsRoutes);

module.exports = routes;