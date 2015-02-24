var statsGetMock = require('./stats.get.mock.json');

exports.index = get;
exports.create = create;
exports.update = update;

function get (req, res) {
	res.json(statsGetMock);
}

function create (req, res) {
	var stats = req.body;
	stats.id = guid();
	statsGetMock.push(stats);
	res.json(stats);
}

function update (req, res) {
	var stats = req.body;
	var id = req.param('id');
	var index = getIndexById(id);
	statsGetMock.splice(index, 1, stats);
	res.json(stats);
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