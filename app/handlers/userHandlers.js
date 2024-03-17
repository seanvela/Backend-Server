const Users = require("../service/userService");

const users = new Users();

const fetchAllUsersHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    console.log(`${new Date()} - API called for fetching all users`);
    res.end(JSON.stringify(users.getAllUsers()));
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

const fetchUserByUsernameHandler = (req, res, username) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    const user = users.getUserByUsername(username);
    console.log(
      `${new Date()} - API called for fetching user using the provided username`
    );
    res.end(
      JSON.stringify(
        user
          ? user
          : { message: `User with username ${username} was not found` }
      )
    );
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

const loginHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "POST") {
    let requestBody = "";

    req.on("data", (chunk) => {
      requestBody += chunk;
    });

    req.on("end", () => {
      requestBody = JSON.parse(requestBody);

      const username = requestBody.username;
      const password = requestBody.password;

      const { login, userObject } = users.login(username, password);

      if (login) {
        res.statusCode = 200;
        console.log(`${new Date()} - Login is successful`);
        res.end(JSON.stringify(userObject));
      } else {
        res.statusCode = 403;
        console.log(`${new Date()} - Invalid login credentials`);
        res.end(JSON.stringify({ message: "Invalid Creadentials" }));
      }
    });
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

module.exports = {
  fetchAllUsersHandler,
  fetchUserByUsernameHandler,
  loginHandler,
};
