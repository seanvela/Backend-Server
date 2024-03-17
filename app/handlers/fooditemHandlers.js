const Fooditems = require("../service/fooditemService");

const fooditems = new Fooditems();

const fetchAllFooditemsHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    console.log(`${new Date()} - API called for fetching all fooditems`);
    res.end(JSON.stringify(fooditems.getAllFooditems()));
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

const fetchFooditemByIdHandler = (req, res, fooditemId) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    const fooditem = fooditems.getFooditemById(fooditemId);
    console.log(
      `${new Date()} - API called for fetching fooditem using the provided id`
    );
    res.end(
      JSON.stringify(
        fooditem
          ? fooditem
          : { message: `Fooditem with id ${fooditemId} was not found` }
      )
    );
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

module.exports = {
  fetchAllFooditemsHandler,
  fetchFooditemByIdHandler,
};
