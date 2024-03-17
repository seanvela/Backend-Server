const Cuisines = require("../service/cuisineService");

const cuisines = new Cuisines();

const fetchAllCuisinesHandler = (req, res) => {
  //COMPLETE TASK 1.i HERE
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    console.log(`${new Date()} - API called for fetching all cuisines`);
    res.end(JSON.stringify(cuisines.getAllCuisines()));
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

const fetchCuisineByIdHandler = (req, res, cuisineId) => {
  // COMPLETE TASK 1.i HERE
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    const cuisine = cuisines.getCuisineById(cuisineId) ;
    console.log(
      `${new Date()} - API called for fetching cuisine using the provided id`
    );
    res.end(
      JSON.stringify(
        cuisine
          ? cuisine
          : { message: `Cuisine with id ${cuisineId} was not found` }
      )
    );
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

module.exports = {
  fetchAllCuisinesHandler,
  fetchCuisineByIdHandler,
};
