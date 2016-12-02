(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories-list',
    templateUrl: 'src/menuapp/templates/categorieslist.template.html',
    controller: 'CategoriesListController as categoriesList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

//  .state('itemDetail', {
//    url: '/item-detail/{itemId}',
//    templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
//    controller: 'ItemDetailController as itemDetail',
//    resolve: {
//      item: ['$stateParams', 'ShoppingListService',
//            function ($stateParams, ShoppingListService) {
//              return ShoppingListService.getItems()
//                .then(function (items) {
//                  return items[$stateParams.itemId];
//                });
//            }]
//    }
//  });
}

})();
