/**
 * Created by naor on 2/24/15.
 */
 (function () {
  'use strict';

  angular
  .module('map')
  .controller('MapCtrl', MapCtrl);

function MapCtrl (attacks) {
    var vm = this;
    vm.mapProps = {
      defaults: {
        interactions: {
          mouseWheelZoom: true
        },
        controls: {
          //zoom: false,
          //rotate: false,
          attribution: false
        }
      }
    };

    vm.currentAttack = {
      lat: 40,
      lon: 36,
      zoom: 3,
      projection: 'EPSG:4326',
    };

    vm.markers = attacks.items;

    activate();

    function activate () {
      attacks.start();
    }
}
})();