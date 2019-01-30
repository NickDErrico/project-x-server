const users = require("../controllers/users.js");
const projects = require("../controllers/projects.js");
const components = require("../controllers/components.js");

module.exports = function(app) {
  // USERS
  app.get("/", users.index);
  app.get("/users/:id", users.show);

  app.post("/users", users.create);
  app.patch("/users/:id", users.update);
  app.delete("/users/:id", users.delete);

  // PROJECTS
  app.get("/projects", projects.index);
  app.get("/projects/:id", projects.show);

  app.post("/projects", projects.create);
  app.patch("/projects/:id", projects.update);
  app.delete("/projects/:id", projects.delete);

  // COMPONENTS
  app.get("/components", components.index);
  app.get("/components/:id", components.show);

  app.post("/components", components.create);
  app.patch("/components/:id", components.update);
  app.delete("/components/:id", components.delete);
};
