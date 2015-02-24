var _ = require('lodash');
var promise = require('es6-promise').Promise;
var rest = require('restler');
var config = require('../../config/environment');
var restUrl = config.restUrl + '/admin';

exports.index = get;

function get (req, res) {
	rest.get(restUrl).on('complete', handleGet);
	
	function handleGet (response){
		res.json(response.admin);
	}
}