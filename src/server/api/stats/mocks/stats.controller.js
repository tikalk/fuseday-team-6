var rest = require('restler');
var statsGetMock = require('./stats.get.mock.json');

exports.index = get;

function get (req, res) {
	// res.json(statsGetMock);

	// return;

	rest.get('http://10.10.10.16:8080/api/location')
		.on('complete', handleGet)
		.on('error', handleError);
	
	function handleGet (response){
		res.json(response);
	}

	function handleError (res) {
		res.json({
			error: res
		})
	}
}

function getIndexById (id) {
	var _index;
	statsGetMock.forEach(function(item, index){
		if (item.id === id) {
			_index = index;
		}
	});
	return _index;
}

function guid () {
	return Math.floor((Math.random() * 10000000000) + 1);
}