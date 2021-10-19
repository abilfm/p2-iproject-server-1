'use strict';
const { encodePassword } = require('../helpers/bcrypt.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Users', [
    {
      username: "budi",
      email: "budi@mail.com",
      password: encodePassword("123456"),
      phone_number: "08123456789",
      address: "Jakarta",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "tuti",
      email: "tuti@mail.com",
      password: encodePassword("654321"),
      phone_number: "08787654321",
      address: "Tangerang",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
