const fs = require("fs");

class Menus {
  constructor() {
    this.menus = JSON.parse(fs.readFileSync("./app/data/menus.json", "utf-8"));
  }

  getAllMenus() {
    return this.menus;
  }

  getMenuById(id) {
    const menu = this.menus.find((menu) => menu.id == id);
    return menu;
  }
  
  getMenuByRestaurantId(restaurantId){
    const menu = this.menus.find((menu) => menu.restaurantId == restaurantId);
    return menu;
  }
}

module.exports = Menus;