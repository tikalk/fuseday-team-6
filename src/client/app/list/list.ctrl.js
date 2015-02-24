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
        vm.attacks = attacks.items;
        activate();

        function activate() {
            attacks.start();
        }
    }
})();
