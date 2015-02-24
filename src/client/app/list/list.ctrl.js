(function() {
    'use strict';

    angular
        .module('list')
        .controller('ListCtrl', ListCtrl);

    /* @ngInject */
    function ListCtrl($scope, attacks) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'ListCtrl';
        vm._attacks = attacks.items;
        vm.attacks = attacks.items;
        activate();

        function activate() {
            $scope.$watch('vm._attacks', function (items) {
                if (items && items.length) {
                    items.forEach(function(item){
                        vm.attacks.push(item);
                    });
                }
            });
            attacks.start();
        }
    }
})();
