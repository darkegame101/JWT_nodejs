"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "user",
      [
        {
          username: "thang nao",
          password: "hfndksf",
          email: "John Doe",
          address: "123 Main St, City A",
          sex: "Male",
          phone: "1234567890",
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "thang  da nao",
          password: "nvnsdkjvhdsnvnsdkjvhds",
          email: "John Doe 2",
          address: "456 Oak St, City B",
          sex: "Male",
          phone: "0987654321",
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "th da ang nao",
          password: "bkcsdbkcsd",
          email: "John Doe 33",
          address: "789 Pine St, City C",
          sex: "Male",
          phone: "1122334455",
          groupId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "alice123",
          password: "abc123",
          email: "alice@example.com",
          address: "101 Maple St, City D",
          sex: "Female",
          phone: "2233445566",
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "bob_smith",
          password: "password123",
          email: "bob@example.com",
          address: "202 Birch St, City E",
          sex: "Male",
          phone: "6677889900",
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "jane_doe",
          password: "securepass",
          email: "jane.doe@example.com",
          address: "303 Cedar St, City F",
          sex: "Female",
          phone: "4455667788",
          groupId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "charlie_brown",
          password: "charlie123",
          email: "charlie@example.com",
          address: "404 Elm St, City G",
          sex: "Male",
          phone: "5544332211",
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "emily_rose",
          password: "emilypass",
          email: "emily.rose@example.com",
          address: "505 Oakwood St, City H",
          sex: "Female",
          phone: "7788991122",
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "david_wilson",
          password: "davidssecure",
          email: "david.wilson@example.com",
          address: "606 Birchwood St, City I",
          sex: "Male",
          phone: "8899776655",
          groupId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "lucy_liu",
          password: "lucyliu123",
          email: "lucy.liu@example.com",
          address: "707 Pinewood St, City J",
          sex: "Female",
          phone: "6677882233",
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
