const fs = require("fs");

class Cuisines {
  constructor() {
    this.cuisines = JSON.parse(
      fs.readFileSync("./app/data/cuisines.json", "utf-8")
    );
  }
  //COMPLETE TASK 1.ii HERE
  getAllCuisines() {
    return this.cuisines;
  }

  getCuisineById(id) {
    const cuisine = this.cuisines.find((cuisine) => cuisine.id == id);
    return cuisine;
  }

  getCuisineByName(name) {
    const cuisine = this.cuisines.find((cuisine) => cuisine.name == name);
    return cuisine;
  }           
}

module.exports = Cuisines;
