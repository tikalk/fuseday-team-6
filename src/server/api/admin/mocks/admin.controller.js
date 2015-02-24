var adminGetMock = require('./admin.get.mock.json');
var rest = require('restler');
// var restUrl = config.restUrl + '/admin';

exports.index = get;

function get (req, res) {
	res.json(adminGetMock);
	return;
	
	// rest.get(restUrl).on('complete', handleGet);
	
	// function handleGet (response){
	// 	res.json(response.admin);
	// }
}

function create (req, res) {
	var admin = req.body;
	admin.id = guid();
	adminGetMock.push(admin);
	res.json(admin);
}

function update (req, res) {
	var admin = req.body;
	var id = req.param('id');
	var index = getIndexById(id);
	adminGetMock.splice(index, 1, admin);
	res.json(admin);
}

function getIndexById (id) {
	var _index;
	adminGetMock.forEach(function(item, index){
		if (item.id === id) {
			_index = index;
		}
	});
	return _index;
}

function guid () {
	return Math.floor((Math.random() * 10000000000) + 1);
}