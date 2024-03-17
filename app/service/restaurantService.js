const fs = require("fs");
const Cuisines = require("../service/cuisineService");
const Categories = require("./categoryService");
const Fooditems = require("../service/fooditemService");
const Menuitems = require("../service/menuitemService");
const Menus = require("../service/menuService");

const cuisines = new Cuisines();
const categories = new Categories();
const fooditems = new Fooditems();
const menuitems = new Menuitems();
const menus = new Menus();

class Restaurants {
  constructor() {
    this.restaurants = JSON.parse(fs.readFileSync("./app/data/restaurants.json", "utf-8"));
  }

  getAllRestaurants() {
    return this.restaurants;
  }

  getRestaurantById(id) {
    const restaurant = this.restaurants.find((restaurant) => restaurant.id == id);
    return restaurant;
  }

  getAllRestaurantsByCategory(category) {
    try {
      // Step 1: Find category id of the matching category
      const categoryId = categories.getCategoryByName(category).id;

      // Step 2: Find food items matching the selected category
      const selectedCategoryFooditems = fooditems.getFooditemsByCategoryId(categoryId);

      // Step 3 : Find ids of the food items matching the selected category
      const selectedCategoryFooditemsIds = selectedCategoryFooditems.map(fooditem => fooditem.id);

      // Step 4: Find menu items with food items matching the selected category
      const selectedCategoryMenuitems = []
      selectedCategoryFooditemsIds.map(fooditemId => {
        menuitems.getAllMenuitemsByFooditemId(fooditemId).forEach(menuitem => {
          selectedCategoryMenuitems.push(menuitem);
        });
      })

      // Step 5: Find ids of menus having menu items matching the selected category
      const selectedCategoryMenuIds = selectedCategoryMenuitems.map(menuitem => menuitem.menuId);
      const selectedCategoryMenus = []
      selectedCategoryMenuIds.forEach(menuId => {
        selectedCategoryMenus.push(menus.getMenuById(menuId));
      });

      // Step 6: Find restaurants with menus matching the selected category
      const filteredRestaurants = this.restaurants.filter(restaurant =>
        selectedCategoryMenus.some(menu => menu.restaurantId === restaurant.id)
      );
      return filteredRestaurants;
    }
    catch {
      console.log("No Route")
    }
    return `No Restaurants serving ${category} category`;
  }
  
  getAllRestaurantsByCuisine(cuisine) {
    //COMPLETE TASK 2.ii HERE
    try {
      // Step 1: Find cuisine id of the matching cuisine
      const cuisineId = cuisines.getCuisineByName(cuisine).id;

      // Step 2: Find food items matching the selected cuisine
      const selectedCuisineFooditems = fooditems.getFooditemsByCuisineId(cuisineId);

      // Step 3 : Find ids of the food items matching the selected cuisine
      const selectedCuisineFooditemsIds = selectedCuisineFooditems.map(fooditem => fooditem.id);

      // Step 4: Find menu items with food items matching the selected cuisine
      const selectedCuisineMenuitems = []
      selectedCuisineFooditemsIds.map(fooditemId => {
        menuitems.getAllMenuitemsByFooditemId(fooditemId).forEach(menuitem => {
          selectedCuisineMenuitems.push(menuitem);
        });
      })

      // Step 5: Find ids of menus having menu items matching the selected cuisine
      const selectedCuisineMenuIds = selectedCuisineMenuitems.map(menuitem => menuitem.menuId);
      const selectedCuisineMenus = []
      selectedCuisineMenuIds.forEach(menuId => {
        selectedCuisineMenus.push(menus.getMenuById(menuId));
      });

      // Step 6: Find restaurants with menus matching the selected cuisine
      const filteredRestaurants = this.restaurants.filter(restaurant =>
        selectedCuisineMenus.some(menu => menu.restaurantId === restaurant.id)
      );
      return filteredRestaurants;
    }
    catch (error) {
      console.error(`Error in getAllRestaurantsByCuisine: ${error}`);
    }
    return `No Restaurants serving ${cuisine} cuisine`;
}
}

module.exports = Restaurants;