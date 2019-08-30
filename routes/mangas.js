'use strict'
var express = require('express');
var router = express.Router();
var Mangas = require('../models/mangas');


router.get('/', async (req, res) => {
    await Mangas.findAll()
      .then(data => (res.json(data)))
      .catch(err => res.status(400).json(err))
  })

  module.exports = router;
