'use strict'
var express = require('express');
var router = express.Router();
var Pictures = require('../models/pictures');


router.get('/', async (req, res) => {
    await Pictures.findAll()
      .then(data => (res.json(data)))
      .catch(err => res.status(400).json(err))
  })

  module.exports = router;
