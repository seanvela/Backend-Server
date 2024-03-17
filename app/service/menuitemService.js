const fs = require("fs");
const Menus = require("../service/menuService");
const Fooditems = require("../service/fooditemService");
const menus = new Menus();
const fooditems = new Fooditems();

class Menuitems {
  constructor() {
    this.menuitems = JSON.parse(fs.readFileSync("./app/data/menuitems.json", "utf-8"));
  }

  getAllMenuitems() {
    return this.menuitems;
  }

  getMenuitemById(id) {
    const menuitem = this.menuitems.find((menuitem) => menuitem.id == id);
    return menuitem;
  }

  getAllMenuitemsByFooditemId(fooditemId) {
    const menuitems = this.menuitems.filter((menuitem) => menuitem.fooditemId == fooditemId);
    return menuitems;
  }

  getAllMenuitemsByRestaurantId(restaurantId, selectedCategoryId = null, selectedCuisineId = null) {
    // Get menuId by restaurantId
    const selectedMenuId = menus.getMenuByRestaurantId(restaurantId).id;

    // Get all menuitems of the selected menuId
    let filteredMenuitems = this.menuitems.filter((menuitem) => menuitem.menuId == selectedMenuId);

    // Stores all resultant menuitems such that each menuitem has its
    // id, fooditemId, fooditem title, fooditem image, and fooditem price
    let resultantMenuitems = [];

    // Loop through each of the menuitems to extract only the required fields
    filteredMenuitems.forEach((menuitem) => {
      resultantMenuitems.push({
        "Menuitem Id": menuitem.id,
        "Fooditem Id": menuitem.fooditemId,
        "Fooditem Name": fooditems.getFooditemById(menuitem.fooditemId).name,
        "Fooditem Image": fooditems.getFooditemById(menuitem.fooditemId).image,
        "Fooditem Price": menuitem.fooditemPrice,
      });
    });

    // If categoryId or cuisineId is provided then the resultant menuitems should be reordered
    if (selectedCategoryId || selectedCuisineId) {
      // Variable to store the filtered menuitems belonging to the selected categoryId or cuisineId
      let preferredMenuItemsOrder = [];

      // Check if selectedCategoryId is not null then
      if (selectedCategoryId) {
        // Filter food items with the given categoryId
        filteredMenuitems = filteredMenuitems.filter((menuitem) => {
          const fooditem = fooditems.getFooditemById(menuitem.fooditemId);
          return fooditem && fooditem.categoryId == selectedCategoryId;
        });
      }
      // Else
      else {
        // Filter food items with the given cuisineId
        filteredMenuitems = filteredMenuitems.filter((menuitem) => {
          const fooditem = fooditems.getFooditemById(menuitem.fooditemId);
          return fooditem && fooditem.cuisineId == selectedCuisineId;
        });
      }

      // Extract the fooditem Ids of all the filtered fooditems
      const preferredFooditemIds = filteredMenuitems.map((item) => item["Fooditem Id"]);

      // Array variables to store the preferred menu items and the remaining menu items
      const preferredMenuItems = resultantMenuitems.filter((item) =>
        preferredFooditemIds.includes(item["Fooditem Id"])
      );
      const remainingMenuItems = resultantMenuitems.filter(
        (item) => !preferredFooditemIds.includes(item["Fooditem Id"])
      );

      // Return the preferred menu items followed by the remaining menu items
      return preferredMenuItems.concat(remainingMenuItems);
    } else {
      // If no categoryId or cuisineId is passed then simply return the resultant menu items
      return resultantMenuitems;
    }
  }
}

module.exports = Menuitems;
