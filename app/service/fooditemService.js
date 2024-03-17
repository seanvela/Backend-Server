const fs = require("fs");

class Fooditems {
  constructor() {
    this.fooditems = JSON.parse(fs.readFileSync("./app/data/fooditems.json", "utf-8"));
  }

  getAllFooditems() {
    return this.fooditems;
  }

  getFooditemById(id) {
    const fooditem = this.fooditems.find((fooditem) => fooditem.id == id);
    return fooditem;
  }

  getFooditemsByCuisineId(id) {
    const fooditems = this.fooditems.filter((fooditem) => fooditem.cuisineId == id);
    return fooditems;
  }

  getFooditemsByCategoryId(id) {
    const fooditems = this.fooditems.filter((fooditem) => fooditem.categoryId == id);
    return fooditems;
  }
}

module.exports = Fooditems;