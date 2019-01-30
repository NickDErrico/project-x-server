exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("components")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("components").insert([
        {
          component_name: "App",
          parent_id: null,
          project_id: 1,
          has_route: true,
          has_state: true,
          has_props: true
        },
        {
          component_name: "Auth",
          parent_id: 1,
          project_id: 1,
          has_route: true,
          has_state: true,
          has_props: true
        },
        {
          component_name: "UserDash",
          parent_id: 1,
          project_id: 1,
          has_route: true,
          has_state: true,
          has_props: true
        },
        {
          component_name: "Login",
          parent_id: 2,
          project_id: 1,
          has_route: true,
          has_state: true,
          has_props: true
        },
        {
          component_name: "Signup",
          parent_id: 2,
          project_id: 1,
          has_route: true,
          has_state: false,
          has_props: true
        },
        {
          component_name: "test1",
          parent_id: 3,
          project_id: 1,
          has_route: false,
          has_state: true,
          has_props: false
        },
        {
          component_name: "test2",
          parent_id: 3,
          project_id: 1,
          has_route: true,
          has_state: false,
          has_props: true
        },
        {
          component_name: "test3",
          parent_id: 4,
          project_id: 1,
          has_route: false,
          has_state: true,
          has_props: true
        },
        {
          component_name: "test4",
          parent_id: 5,
          project_id: 1,
          has_route: true,
          has_state: false,
          has_props: false
        },
        {
          component_name: "test5",
          parent_id: 5,
          project_id: 1,
          has_route: false,
          has_state: true,
          has_props: true
        },
        {
          component_name: "test6",
          parent_id: 5,
          project_id: 1,
          has_route: true,
          has_state: false,
          has_props: true
        },
        {
          component_name: "test7",
          parent_id: 6,
          project_id: 1,
          has_route: false,
          has_state: true,
          has_props: false
        },
        {
          component_name: "test8",
          parent_id: 5,
          project_id: 1,
          has_route: true,
          has_state: false,
          has_props: true
        },
        {
          component_name: "test9",
          parent_id: 3,
          project_id: 1,
          has_route: false,
          has_state: true,
          has_props: true
        },
        {
          component_name: "test10",
          parent_id: 5,
          project_id: 1,
          has_route: true,
          has_state: false,
          has_props: false
        },
        {
          component_name: "test11",
          parent_id: 9,
          project_id: 1,
          has_route: false,
          has_state: true,
          has_props: true
        },
        {
          component_name: "test12",
          parent_id: 16,
          project_id: 1,
          has_route: true,
          has_state: false,
          has_props: true
        },
        {
          component_name: "test13",
          parent_id: 12,
          project_id: 1,
          has_route: false,
          has_state: true,
          has_props: false
        },
        {
          component_name: "test14",
          parent_id: 18,
          project_id: 1,
          has_route: true,
          has_state: false,
          has_props: true
        }
      ]);
    });
};
