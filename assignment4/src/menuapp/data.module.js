(function () {
'use strict';

angular.module('Data',[])
        .constant('CategoriesPath','https://davids-restaurant.herokuapp.com/categories.json')
        .constant('MenuItemsPath','https://davids-restaurant.herokuapp.com/menu_items.json?category=');

})();
