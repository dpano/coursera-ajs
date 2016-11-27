(function () {
    'use strict';
    angular.module('NarrowItDownApp', [])
            .controller('ToBuyController', NarrowItDownController)            
            .service('MenuSearchService', MenuSearchService)
            .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com/menu_items.json');

    NarrowItDownController .$inject = ['MenuSearchService'];
    function NarrowItDownController (ShoppingListCheckOffService) {
        var narrowItDown = this;
    }
    
    MenuSearchService .$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService(){
        var service = this;
        
        service.getMatchedMenuItems = function(){
            
        }
    }
})()