const Menus = require("../service/menuService");

const menus = new Menus();

const fetchAllMenusHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    console.log(`${new Date()} - API called for fetching all menus`);
    res.end(JSON.stringify(menus.getAllMenus()));
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

const fetchMenuByIdHandler = (req, res, menuId) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    const menu = menus.getMenuById(menuId);
    console.log(
      `${new Date()} - API called for fetching menu using the provided id`
    );
    res.end(
      JSON.stringify(
        menu
          ? menu
          : { message: `Menu with id ${menuId} was not found` }
      )
    );
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

module.exports = {
  fetchAllMenusHandler,
  fetchMenuByIdHandler,
};
