const http = require("http");
const url = require("url");

const fooditemhandlers = require("./app/handlers/fooditemHandlers");
const categoryhandlers = require("./app/handlers/categoryHandlers");
const cuisinehandlers = require("./app/handlers/cuisineHandlers");
const restauranthandlers = require("./app/handlers/restuarantHandlers");
const menuhandlers = require("./app/handlers/menuHandlers");
const menuitemhandlers = require("./app/handlers/menuitemHandlers");
const userhandlers = require("./app/handlers/userHandlers");

const server = http.createServer((req, res) => {
  const requestUrl = req.url;
  const parts = url.parse(requestUrl, true);
  //console.log(parts);
  switch (parts.pathname) {
    
    case "/v1/categories": {
        const { id } = parts.query;
        if (id) {
          return categoryhandlers.fetchCategoryByIdHandler(req, res, id);
        } else {
          return categoryhandlers.fetchAllCategoriesHandler(req, res);
        }
      }
      
      case "/v1/cuisines": {
        const { id } = parts.query;
        if (id) {
          return cuisinehandlers.fetchCuisineByIdHandler(req, res, id);
        } else {
          return cuisinehandlers.fetchAllCuisinesHandler(req, res);
        }
      }
      
      case "/v1/restaurants": {
        const { id, cuisine, category } = parts.query;
        if (id) {
          return restauranthandlers.fetchRestaurantByIdHandler(req, res, id);
        }
        else if (cuisine){
          return restauranthandlers.fetchAllRestaurantsByCuisineHandler(req, res, cuisine);
        } 
        else if(category){
          return restauranthandlers.fetchAllRestaurantsByCategoryHandler(req, res, category);
        }
        else {
          return restauranthandlers.fetchAllRestaurantsHandler(req, res);
        }
      }
      
      case "/v1/fooditems": {
      const { id } = parts.query;
      if (id) {
        return fooditemhandlers.fetchFooditemByIdHandler(req, res, id);
      } else {
        return fooditemhandlers.fetchAllFooditemsHandler(req, res);
      }
    }

    case "/v1/menus": {
        const { id } = parts.query;
        if (id) {
          return menuhandlers.fetchMenuByIdHandler(req, res, id);
        } else {
          return menuhandlers.fetchAllMenusHandler(req, res);
        }
      }

    case "/v1/menuitems": {
        const { id, restaurantId, categoryId, cuisineId } = parts.query;
        if (id) {
          return menuitemhandlers.fetchMenuitemByIdHandler(req, res, id);
        } 
        else if (restaurantId){
          if(cuisineId){
            return menuitemhandlers.fetchMenuitemByRestaurantIdHandler(req, res, restaurantId, null, cuisineId);  
          }
          else if(categoryId){
            return menuitemhandlers.fetchMenuitemByRestaurantIdHandler(req, res, restaurantId, categoryId, null);  
          }
          else{
            return menuitemhandlers.fetchMenuitemByRestaurantIdHandler(req, res, restaurantId);
          }
        }else {
          return menuitemhandlers.fetchAllMenuitemsHandler(req, res);
        }
    }

    case "/v1/users": {
      const { username } = parts.query;
      if (username) {
        return userhandlers.fetchUserByUsernameHandler(req, res, username);
      } else {
        return userhandlers.fetchAllUsersHandler(req, res);
      }
    }

    case "/v1/login":
      return userhandlers.loginHandler(req, res);

    default: {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      console.log(`${new Date()} - Route not found`);
      res.end(JSON.stringify({ message: "Route not found" }));
    }
  }
});

const port = 8080;

server.listen(port, () => {
  console.log(`${new Date()} - Server is running on port ${port}`);
});
