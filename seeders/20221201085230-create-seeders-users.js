'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('users', 
   [{
      name : 'Jidan',
      npm : '519055555',
      gender : 'laki-laki',
      jurusan : 'Informatika',
      alamat : 'Yogyakarta',
      umur : '21',
      email : 'j@gmail.com',
      password : await bcrypt.hash('12345678', 10),
      created_at : new Date()
   },
   {
    name : 'Agung',
    npm : '519055551',
    gender : 'laki-laki',
    jurusan : 'Informatika',
    alamat : 'Yogyakarta',
    umur : '21',
    email : 'y@gmail.com',
    password : await bcrypt.hash('12345678', 10),
    created_at : new Date()
 }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
