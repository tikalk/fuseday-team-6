'use strict';

var express = require('express');
var controller = require('./stats.controller');
var mockController = require('./mocks/stats.controller');
var apiHandler = require('../../components/apiHandler').handle(mockController, controller);

var router = express.Router();
router.get('/', apiHandler.index);
// router.post('/', apiHandler.create);
// router.put('/:id', apiHandler.update);
// router.post('/:id/clone', apiHandler.clone);

module.exports = router;