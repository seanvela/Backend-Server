const fs = require("fs");

class Categories {
  constructor() {
    this.categories = JSON.parse(fs.readFileSync("./app/data/categories.json", "utf-8"));
  }

  getAllCategories() {
    return this.categories;
  }

  getCategoryById(id) {
    const category = this.categories.find((category) => category.id == id);
    return category;
  }

  getCategoryByName(name) {
    const category = this.categories.find((category) => category.name == name);
    return category;
  }
}

module.exports = Categories;