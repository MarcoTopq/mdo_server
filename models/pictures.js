'use strict'
const Sequelize = require('sequelize');
const db = require('../bin/index')
const Pictures = db.define('pictures', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  picture: {
    type: Sequelize.STRING,
  },
  url: {
    type: Sequelize.STRING,
  },
  thumb: {
    type: Sequelize.STRING,
  },
  picture_id: {
    type: Sequelize.INTEGER,
  },
  picture_type: {
    type: Sequelize.STRING,
  },
  created_at: Sequelize.TIME,
  updated_at: Sequelize.TIME,
//   isDeleted: Sequelize.BOOLEAN,
}, {
  paranoid: false,
  timestamps: false,
});

Pictures.sync();

module.exports = Pictures;