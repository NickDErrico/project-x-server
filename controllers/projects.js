const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex("projects").then(projects => res.json(projects));
  },
  show: (req, res) => {
    knex("projects")
      .join("components", { "projects.id": "components.project_id" })
      .where("project_id", req.params.id)
      .then(components => res.json(components));
  },
  create: (req, res) => {
    knex("projects")
      .insert(req.body)
      .then(() => res.sendStatus(200));
  },
  update: (req, res) => {
    knex("projects")
      .where("id", req.params.id)
      .update(req.body)
      .then(() => res.sendStatus(200));
  },
  delete: (req, res) => {
    knex("projects")
      .where("id", req.params.id)
      .del()
      .then(() => res.sendStatus(200));
  }
};
