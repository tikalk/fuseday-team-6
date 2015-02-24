var adminGetMock = require('./admin.get.mock.json');
var rest = require('restler');
// var restUrl = config.restUrl + '/admin';

exports.index = get;

function get (req, res) {
	// res.json(adminGetMock);
	// return;

	rest.get('http://10.10.10.16:8080/admin/stats').on('complete', handleGet);
	
	function handleGet (response){
		res.json(response);
	}
}

function guid () {
	return Math.floor((Math.random() * 10000000000) + 1);
}