const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex("components").then(components => res.json(components));
  },
  show: (req, res) => {
    knex("components")
      .where("id", req.params.id)
      .then(component => res.json(component));
  },
  create: (req, res) => {
    knex("components")
      .insert(req.body)
      .then(() => res.sendStatus(200));
  },
  update: (req, res) => {
    knex("components")
      .where("id", req.params.id)
      .update(req.body)
      .then(() => res.sendStatus(200));
  },
  delete: (req, res) => {
    knex("components")
      .where("id", req.params.id)
      .del()
      .then(() => res.sendStatus(200));
  }
};
