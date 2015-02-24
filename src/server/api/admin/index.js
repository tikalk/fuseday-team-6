'use strict';

var express = require('express');
var controller = require('./admin.controller');
var mockController = require('./mocks/admin.controller');
var apiHandler = require('../../components/apiHandler').handle(mockController, controller);

var router = express.Router();
router.get('/', apiHandler.index);

module.exports = router;