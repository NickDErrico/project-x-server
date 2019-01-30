exports.up = function(knex, Promise) {
  return knex.schema.createTable("components", table => {
    table.increments();
    table.string("component_name");
    table
      .integer("project_id")
      .references("id")
      .inTable("projects")
      .notNullable()
      .onDelete("CASCADE");
    table.integer("parent_id").defaultTo(null);
    table.boolean("has_route");
    table.boolean("has_state");
    table.boolean("has_props");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("components");
};
