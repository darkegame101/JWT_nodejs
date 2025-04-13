"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "role",
      [
        {
          id: 1,
          url: "user/read",
          description: "read data",
          createdAt: new Date("2025-04-13T07:36:41"),
          updatedAt: new Date("2025-04-13T07:36:41"),
        },
        {
          id: 2,
          url: "user/create",
          description: "create data",
          createdAt: new Date("2025-04-13T07:36:41"),
          updatedAt: new Date("2025-04-13T07:36:41"),
        },
        {
          id: 3,
          url: "user/update",
          description: "update data",
          createdAt: new Date("2025-04-13T07:36:41"),
          updatedAt: new Date("2025-04-13T07:36:41"),
        },
        {
          id: 4,
          url: "user/delete",
          description: "delete data",
          createdAt: new Date("2025-04-13T07:36:41"),
          updatedAt: new Date("2025-04-13T07:36:41"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("role", null, {});
  },
};
