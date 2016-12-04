(function () {
'use strict';

angular.module('MenuApp')
.component('itemDetails', {
  templateUrl: 'src/menuApp/templates/item-details.template.html',
  bindings: {
    item: '<'
  }
});

})();
