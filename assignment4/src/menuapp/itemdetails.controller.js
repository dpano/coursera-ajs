(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailsController', ItemDetailsController);

ItemDetailsController.$inject = ['item'];
function ItemDetailsController(item) {
  var itemDetails = this;
  itemDetails.name = item.name;
  itemDetails.shortName = item.short_name;
  itemDetails.specialInstructions = item.special_instructions;
}

})();
