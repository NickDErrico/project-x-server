const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex("users").then(users => res.json(users));
  },
  show: (req, res) => {
    knex("users")
      .where("id", req.params.id)
      .then(user => res.json(user[0]));
  },
  create: (req, res) => {
    knex("users")
      .insert(req.body)
      .then(() => res.sendStatus(200));
  },
  update: (req, res) => {
    knex("users")
      .where("id", req.params.id)
      .update(req.body)
      .then(() => res.sendStatus(200));
  },
  delete: (req, res) => {
    knex("users")
      .where("id", req.params.id)
      .del()
      .then(() => res.sendStatus(200));
  }
};
