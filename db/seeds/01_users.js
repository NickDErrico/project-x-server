exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "r3c0n5", email: "test@test.test", password: "asdfasdf" },
        { username: "green", email: "g@g.g", password: "password" },
        { username: "blue", email: "b@b.b", password: "something" }
      ]);
    });
};
