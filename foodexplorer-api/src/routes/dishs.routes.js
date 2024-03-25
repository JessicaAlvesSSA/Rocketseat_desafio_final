const { Router } = require("express");
const dishsRoutes = Router();
const DishsController = require("../controllers/DishsController");
const dishsController = new DishsController();

dishsRoutes.get("/", dishsController.index);
dishsRoutes.post("/:user_id", dishsController.create);
dishsRoutes.get("/:id", dishsController.show); 
dishsRoutes.delete("/:id", dishsController.delete); 

module.exports = dishsRoutes;

