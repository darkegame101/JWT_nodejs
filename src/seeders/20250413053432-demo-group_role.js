"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "group_role",
      [
        {
          id: 1,
          groupId: 1,
          roleId: 1,
          createdAt: new Date("2025-04-13T07:10:37"),
          updatedAt: new Date("2025-04-13T07:10:37"),
        },
        {
          id: 2,
          groupId: 1,
          roleId: 2,
          createdAt: new Date("2025-04-13T07:10:37"),
          updatedAt: new Date("2025-04-13T07:10:37"),
        },
        {
          id: 3,
          groupId: 1,
          roleId: 3,
          createdAt: new Date("2025-04-13T07:11:48"),
          updatedAt: new Date("2025-04-13T07:11:48"),
        },
        {
          id: 4,
          groupId: 2,
          roleId: 3,
          createdAt: new Date("2025-04-13T07:11:48"),
          updatedAt: new Date("2025-04-13T07:11:48"),
        },
        {
          id: 5,
          groupId: 2,
          roleId: 2,
          createdAt: new Date("2025-04-13T07:12:16"),
          updatedAt: new Date("2025-04-13T07:12:16"),
        },
        {
          id: 6,
          groupId: 3,
          roleId: 2,
          createdAt: new Date("2025-04-13T07:12:16"),
          updatedAt: new Date("2025-04-13T07:12:16"),
        },
        {
          id: 7,
          groupId: 3,
          roleId: 2,
          createdAt: new Date("2025-04-13T07:12:42"),
          updatedAt: new Date("2025-04-13T07:12:42"),
        },
        {
          id: 8,
          groupId: 4,
          roleId: 2,
          createdAt: new Date("2025-04-13T07:12:42"),
          updatedAt: new Date("2025-04-13T07:12:42"),
        },
        {
          id: 9,
          groupId: 4,
          roleId: 3,
          createdAt: new Date("2025-04-13T07:12:56"),
          updatedAt: new Date("2025-04-13T07:12:56"),
        },
        {
          id: 10,
          groupId: 4,
          roleId: 4,
          createdAt: new Date("2025-04-13T07:12:56"),
          updatedAt: new Date("2025-04-13T07:12:56"),
        },
        {
          id: 11,
          groupId: 4,
          roleId: 4,
          createdAt: new Date("2025-04-13T07:12:56"),
          updatedAt: new Date("2025-04-13T07:12:56"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("group_role", null, {});
  },
};
