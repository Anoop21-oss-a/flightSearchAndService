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
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'Boeing 757',
        capacity:'295',
        createdAt:new Date(),
        updatedAt:new Date() 
      },
      {
        modelNumber: 'Boeing 767',
        capacity:'375',
        createdAt:new Date(),
        updatedAt:new Date()  
      },
      {
        modelNumber: 'Ilyushin Il-96',
        capacity:'300',
        createdAt:new Date(),
        updatedAt:new Date()  
      },
      {
        modelNumber: 'Boeing 787 Dreamliner',
        capacity:'381',
        createdAt:new Date(),
        updatedAt:new Date()  
      },
      {
        modelNumber: 'Airbus A330',
        capacity:'460',
        createdAt:new Date(),
        updatedAt:new Date()  
      },
      {
        modelNumber: 'Airbus A340',
        capacity:'440',
        createdAt:new Date(),
        updatedAt:new Date()  
      },
      {
        modelNumber: 'Airbus A350XWB',
        capacity:'440',
        createdAt:new Date(),
        updatedAt:new Date()  
      },
      {
        modelNumber: 'Boeing 777',
        capacity:'550',
        createdAt:new Date(),
        updatedAt:new Date()  
      },
      {
        modelNumber: 'Boeing 747',
        capacity:'660',
        createdAt:new Date(),
        updatedAt:new Date()  
      },
      {
        modelNumber: 'Airbus A380',
        capacity:'575',
        createdAt:new Date(),
        updatedAt:new Date()  
      },
      ], {});
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
