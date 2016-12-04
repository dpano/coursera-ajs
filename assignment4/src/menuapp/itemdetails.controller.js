(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailsController', ItemDetailsController);

ItemDetailsController.$inject = ['item'];
function ItemDetailsController(item) {
  var itemDetails = this;
  itemDetails.item = item;
}

})();
