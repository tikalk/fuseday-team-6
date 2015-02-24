(function() {
    'use strict';

    angular
        .module('map')
        .factory('attacks', attacks);

    /* @ngInject */
    function attacks($http, $interval) {
    	var items = [];
        var service = {
            check: check,
            items: items,
            start: start
        };

        return service;

        ////////////////

        function start () {
        	$interval(check, 2000);
        }
        function check() {
        	return $http.get('/api/stats').then(function(res){
        		items.length = 0;
        		res.data.forEach(function (item) {
        			items.push(item);
        		});
        	});
        }
    }
})();