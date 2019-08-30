'use strict'
const Sequelize = require('sequelize');
const db = require('../bin/index')
const Chapters = db.define('chapters', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  chapter: {
    type: Sequelize.STRING,
  },
  downloads: {
    type: Sequelize.INTEGER,
  },
  views: {
    type: Sequelize.INTEGER,
  },
  manga_id: {
    type: Sequelize.INTEGER,
  },
  created_at: Sequelize.TIME,
  updated_at: Sequelize.TIME,
//   isDeleted: Sequelize.BOOLEAN,
}, {
  paranoid: false,
  timestamps: false,
});

Chapters.sync();

module.exports = Chapters;