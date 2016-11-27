(function () {
    'use strict';
    angular.module('NarrowItDownApp', [])
            .controller('NarrowItDownController', NarrowItDownController)
            .service('MenuSearchService', MenuSearchService)
            .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com/menu_items.json')
            .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItemsList.html',
            scope: {
                items: '<',
                myTitle: '@title',
                onRemove: '&'
            },
            controller: NarrowItDownDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }


    function NarrowItDownDirectiveController() {
        var list = this;

        list.isEmpty = function () {
            return list.items.length === 0
        }
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowItDown = this;
        narrowItDown.myTitle = 'Found Items';
        narrowItDown.items = [];


        narrowItDown.search = function () {
            narrowItDown.items = [];
            var term = narrowItDown.searchTerm;
            
            if (!term){
                return;
            }

            var promise = MenuSearchService.getMatchedMenuItems(term);
            promise.then(function (response) {
                narrowItDown.items = response;
            })
                    .catch(function (error) {
                        console.log("Something went terribly wrong.");
                    });
        }

        narrowItDown.removeItem = function (index) {
            narrowItDown.items.splice(index, 1);
        }

    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        service.getMatchedMenuItems = function (term) {
            return $http({
                method: "GET",
                url: (ApiBasePath),
            }).then(function (result) {
                // process result and only keep items that match 
                var foundItems = [];
                for (var i = 0; i < result.data.menu_items.length; i++) {
                    var name = result.data.menu_items[i].description;

                    if (name.toLowerCase().indexOf(term) !== -1) {
                        foundItems.push(result.data.menu_items[i]);
                    }
                }

                // return processed items
                return foundItems;
            });
        }
    }
})()