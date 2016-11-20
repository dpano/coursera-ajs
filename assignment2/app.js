(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
            .controller('ToBuyController', ToBuyController)
            .controller('AlreadyBoughtController', AlreadyBoughtController)
            .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

        toBuy.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.addItemToAlreadyBought(itemIndex);
            ShoppingListCheckOffService.removeItem(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.items = ShoppingListCheckOffService.getItemsAlreadyBought();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        // Lists
        var itemsToBuy = [
            {
                name: "Panino",
                quantity: 10
            },
            {
                name: "Burger",
                quantity: 20
            },
            {
                name: "Biscuits",
                quantity: 5
            },
            {
                name: "Cup cakes",
                quantity: 10
            }
        ];
        var itemsAlreadyBought = [];

        service.addItemToAlreadyBought = function (itemIndex) {
            itemsAlreadyBought.push(itemsToBuy[itemIndex]);
        };

        service.removeItem = function (itemIndex) {
            itemsToBuy.splice(itemIndex, 1);
        };

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };
        service.getItemsAlreadyBought = function () {
            return itemsAlreadyBought;
        };
    }

})()