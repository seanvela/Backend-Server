const Categories = require("../service/categoryService");

const categories = new Categories();

const fetchAllCategoriesHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    console.log(`${new Date()} - API called for fetching all categories`);
    res.end(JSON.stringify(categories.getAllCategories()));
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

const fetchCategoryByIdHandler = (req, res, categoryId) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    const category = categories.getCategoryById(categoryId);
    console.log(
      `${new Date()} - API called for fetching category using the provided id`
    );
    res.end(
      JSON.stringify(
        category
          ? category
          : { message: `Category with id ${categoryId} was not found` }
      )
    );
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

module.exports = {
  fetchAllCategoriesHandler,
  fetchCategoryByIdHandler,
};
