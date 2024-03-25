const { Router } = require("express");
const ingredientsRoutes = Router();
const IngredientsController = require("../controllers/IngredientsController");
const ingredientsController = new IngredientsController();

ingredientsRoutes.get("/:user_id", ingredientsController.index);

module.exports = ingredientsRoutes;

