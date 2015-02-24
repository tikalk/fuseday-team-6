(function() {
    'use strict';

    angular
        .module('admin')
        .directive('stat', stat);

    /* @ngInject */
    function stat () {
        // Usage:
        //	<stat model="json"></stat>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'E',
        	replace: true,
        	templateUrl: 'app/admin/stat.tpl.html',
            scope: {
            	model: '=',
            	key: '=',
            	status: '@'
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	scope.$watch('model', function(n,o){
        		update(n);
        	});

        	function update (val) {
	        	if(val < 10){
	        		scope.status = 'red';
	        	}
        	}
        }
    }
})();