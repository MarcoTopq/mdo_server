'use strict'
var express = require('express');
var router = express.Router();
var chapters = require('../models/chapters');


router.get('/', async (req, res) => {
    await chapters.findAll()
      .then(data => (res.json(data)))
      .catch(err => res.status(400).json(err))
  })

  module.exports = router;
