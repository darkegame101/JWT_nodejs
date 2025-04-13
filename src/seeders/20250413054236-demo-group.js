"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "group",
      [
        {
          id: 1,
          name: "dev",
          description: "development",
          createdAt: new Date("2025-04-13T07:04:39"),
          updatedAt: new Date("2025-04-13T07:04:39"),
        },
        {
          id: 2,
          name: "test",
          description: "tester",
          createdAt: new Date("2025-04-13T07:04:39"),
          updatedAt: new Date("2025-04-13T07:04:39"),
        },
        {
          id: 3,
          name: "customer",
          description: "buyer",
          createdAt: new Date("2025-04-13T07:05:59"),
          updatedAt: new Date("2025-04-13T07:05:59"),
        },
        {
          id: 4,
          name: "lead",
          description: "leader",
          createdAt: new Date("2025-04-13T07:05:59"),
          updatedAt: new Date("2025-04-13T07:05:59"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("group", null, {});
  },
};
