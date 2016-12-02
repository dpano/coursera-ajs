(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function(){
      return $http({
                method: "GET",
                url: ('https://davids-restaurant.herokuapp.com/categories.json'),
            }).then(function (result) {               

                // return processed items
                return result.data;
            });
  }
  
  service.getItemDetails = function(shortName){
      return $http({
                method: "GET",
                url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + shortName),
            }).then(function (result) {               
                console.log(result);
                // return processed items
                return result.data;
            });
  }
}

})();
