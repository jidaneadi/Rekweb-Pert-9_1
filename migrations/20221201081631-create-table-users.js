'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id : {
        primaryKey : true,
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false
      },
      name : {
        type : Sequelize.STRING,
        allowNull : false
      },
      npm : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      gender : {
        type : Sequelize.ENUM,
        values : ['laki-laki', 'perempuan'],
        defaultValue : 'laki-laki'
      },
      jurusan : {
        type : Sequelize.STRING,
        allowNull : true
      },
      alamat : {
        type : Sequelize.STRING
      },
      umur : {
        type : Sequelize.INTEGER
      },
      email : {
        type : Sequelize.STRING,
        allowNull : false
      },
      password : {
        type : Sequelize.STRING,
        allowNull : false
      },
      token : {
        type : Sequelize.TEXT,
        allowNull : false
      },
      created_at : {
        type : "TIMESTAMP",
        defaultValue : Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull : true
      }, 
      updated_at : {
        type : "TIMESTAMP",
        defaultValue : Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        allowNull : true
      }
    });

    await queryInterface.addConstraint('users', {
      type : 'unique',
      fields : ['email'],
      name : 'UNIQUE_USER_EMAIL'
    });
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.dropTable('users');
    
  }
};
