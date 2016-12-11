(function () {
    "use strict";

    angular.module('common')
            .directive('shortNameValidator', ShortNameValidator);

    ShortNameValidator.$inject = ['MenuService', 'userService'];
    function ShortNameValidator(MenuService, userService) {
        return {
            require: 'ngModel',
            link: function (scope, element, attr, mCtrl) {
                function myValidation(shortName) {

                    var promise = MenuService.validateMenuItem(shortName);
                       
                    promise.then(function (menuItem) { 
                        if (menuItem.id) {
                            userService.setSelectedMenu(menuItem); 
                            mCtrl.$setValidity('myval', true);
                            
                        } else {
                        mCtrl.$setValidity('myval', false);
                        }
                    });
                    return shortName;
                }
                mCtrl.$parsers.push(myValidation);
            }
        };
    }
})();

