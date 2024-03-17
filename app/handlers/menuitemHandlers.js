const Menuitems = require("../service/menuitemService");

const menuitems = new Menuitems();

const fetchAllMenuitemsHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    console.log(`${new Date()} - API called for fetching all menuitems`);
    res.end(JSON.stringify(menuitems.getAllMenuitems()));
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

const fetchMenuitemByIdHandler = (req, res, menuitemId) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    const menuitem = menuitems.getMenuitemById(menuitemId);
    console.log(
      `${new Date()} - API called for fetching menuitem using the provided id`
    );
    res.end(
      JSON.stringify(
        menuitem
          ? menuitem
          : { message: `Menuitem with id ${menuitemId} was not found` }
      )
    );
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

const fetchMenuitemByRestaurantIdHandler = (req, res, restaurantId, categoryId = null, cuisineId = null) => {

  //Complete Task 3.i here
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    try {
      const menuitemsList = menuitems.getAllMenuitemsByRestaurantId(restaurantId, categoryId, cuisineId);
      res.statusCode = 200;
      console.log(`${new Date()} - API called for fetching menuitems by restaurantId with category or cuisine preference`);
      res.end(JSON.stringify(menuitemsList));
    } catch (error) {
      res.statusCode = 500;
      console.error(`Error in fetchMenuitemByRestaurantIdHandler: ${error}`);
      res.end(JSON.stringify({ message: "Internal Server Error" }));
    }
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

module.exports = {
  fetchAllMenuitemsHandler,
  fetchMenuitemByIdHandler,
  fetchMenuitemByRestaurantIdHandler,
};
