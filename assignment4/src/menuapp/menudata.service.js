(function () {
    'use strict';

    angular.module('Data')
            .service('MenuDataService', MenuDataService);


    MenuDataService.$inject = ['$http']
    function MenuDataService($http) {
        var service = this;
        console.log('im in');
        service.getAllCategories = function () {
            var response = $http({
                method: "GET",
                url: (CategoriesPath)                
            });

            return response;

        };

        service.getItemsForCategory = function (categoryShortName) {
            var response = $http({
                method: "GET",
                url: (MenuItemsPath),
                params: {
                    category: shortName
                }
            });

            return response;

        };
    }

})();
