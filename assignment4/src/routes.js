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
                url: '/categories',
                templateUrl: 'src/menuapp/templates/main-categories.template.html',
                controller: 'CategoriesListController as categoriesList',
                resolve: {
                    items: ['MenuDataService', function (MenuDataService) {
                            return MenuDataService.getAllCategories();
                        }]
                }
            })

            .state('itemDetails', {
                url: '/item-details/{shortName}',
                templateUrl: 'src/menuapp/templates/main-item-details.template.html',
                controller: 'CategoriesListController as categoriesList',
                resolve: {
                    items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
                            return MenuDataService.getItemDetails($stateParams.shortName);
                        }]
                }
            });
    }

})();
