(function () {
'use strict';

angular.module('MenuApp')
.component('itemDetails', {
  templateUrl: 'src/menuapp/templates/item-details.template.html',
  bindings: {
    item: '<'
  }
});

})();
