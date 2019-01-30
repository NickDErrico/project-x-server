exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { project_name: "react test", user_id: 1, uses_redux: false },
        { project_name: "redux test", user_id: 1, uses_redux: true },
        { project_name: "other test", user_id: 1, uses_redux: false },
        { project_name: "test", user_id: 2, uses_redux: false }
      ]);
    });
};
