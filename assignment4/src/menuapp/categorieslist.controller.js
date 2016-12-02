(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);


// MainShoppingListController.$inject = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
CategoriesListController.$inject = ['items'];
function CategoriesListController(items) {
  var categoriesList = this;
  categoriesList.items = items;

}

})();
