const fs = require("fs");

class Users {
  constructor() {
    this.users = JSON.parse(fs.readFileSync("./app/data/users.json", "utf-8"));
  }

  getAllUsers() {
    return this.users;
  }

  getUserByUsername(username) {
    const user = this.users.find((user) => user.username === username);
    return user;
  }

  login(username, password) {
    const user = this.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      return { login: true, userObject: user };
    }

    return { login: false, userObject: null };
  }
}

module.exports = Users