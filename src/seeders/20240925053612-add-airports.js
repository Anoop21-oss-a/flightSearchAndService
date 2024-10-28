'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
    {
      name:'kempegowda',
      cityId:'146',
      createdAt:new Date(),
      updatedAt:new Date(),
   },
   {
    name:'mysuru airport',
    cityId:'146',
    createdAt:new Date(),
    updatedAt:new Date(),
 },
 {
  name:'mangluru int airport',
  cityId:'146',
  createdAt:new Date(),
  updatedAt:new Date(),
},
{
  name:'IGIT',
  cityId:'68',
  createdAt:new Date(),
  updatedAt:new Date(),
},
  
],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
