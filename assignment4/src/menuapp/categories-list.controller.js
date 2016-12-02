(function () {
'use strict';

angular.module('Data')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['MenuDataService', 'items'];
function CategoriesListController(MenuDataService, items) {
    console.log("sdfsdf");
  var categoriesList = this;
  categoriesList.items = items;
}

})();
