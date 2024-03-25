const knex = require("../database/knex");

class DishsController {
  async index(request, response) {
    const { user_id, name, ingredients } = request.query;
    let dishs;

    if (ingredients) {
      dishs = await knex("ingredients")
        .select(["dishs.id", "dishs.name", "dishs.user_id"])
        .where("dishs.user_id", user_id)
        .whereLike("dishs.name", `%${name}%`)
        .innerJoin("dishs", "dishs.id", "ingredients.dish_id")
        .orderBy("dishs.name");
    } else {
      dishs = await knex("dishs")
        .where({ user_id })
        .whereLike("name", `%${name}%`)
        .orderBy("name");
    }

    const userIngredients = await knex("ingredients").where({ user_id });
    const dishsWithIngredients = dishs.map((dish) => {
      const dishIngredients = userIngredients.filter(
        (ingredient) => ingredient.dish_id === dish.id
      );

      return {
        ...dish,
        ingredients: dishIngredients,
      };
    });

    return response.json(dishsWithIngredients);
  }

  async show(request, response) {
    const { id } = request.params;

    const dish = await knex("dishs").where({ id }).first();
    const ingredients = await knex("ingredients")
      .where({ dish_id: id })
      .orderBy("name");

    return response.json({
      ...dish,
      ingredients,
    });
  }

  async create(request, response) {
    const { name, category, ingredients, price, description } = request.body;
    const { user_id } = request.params;

    const [dish_id] = await knex("dishs").insert({
      name,
      description,
      category,
      price,
      user_id,
    });

    const ingredientsInsert = ingredients.map((name) => {
      return {
        dish_id,
        name,
        user_id,
      };
    });

    await knex("ingredients").insert(ingredientsInsert);

    response.json();
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("dishs").where({ id }).delete();

    return response.json();
  }
}

module.exports = DishsController;
