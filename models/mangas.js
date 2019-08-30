'use strict'
const Sequelize = require('sequelize');
const db = require('../bin/index')
const Mangas = db.define('mangas', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  othername: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.STRING,
  },
  genre: {
    type: Sequelize.STRING,
  },
  release: {
    type: Sequelize.STRING,
  },
  authors: {
    type: Sequelize.STRING,
  },
  artis: {
    type: Sequelize.STRING,
  },
  views: {
    type: Sequelize.STRING,
  },
  detail: {
    type: Sequelize.STRING,
  },
  created_at: Sequelize.TIME,
  updated_at: Sequelize.TIME,
//   isDeleted: Sequelize.BOOLEAN,
}, {
  paranoid: false,
  timestamps: false,
});

Mangas.sync();

module.exports = Mangas;