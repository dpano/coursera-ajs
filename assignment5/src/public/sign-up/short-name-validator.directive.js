(function () {
    "use strict";

    angular.module('common')
            .directive('shortNameValidator', ShortNameValidator);

    ShortNameValidator.$inject = ['MenuService'];
    function ShortNameValidator(MenuService) {
        return {
            require: 'ngModel',
            link: function (scope, element, attr, mCtrl) {
                function myValidation(value) {

                    var promise = MenuService.validateMenuItem(value);

                    promise.then(function (val) {
                        if (val) {
                            mCtrl.$setValidity('myval', true);
                        } else {
                            mCtrl.$setValidity('myval', false);
                        }
                    });
                    return value;
                }
                mCtrl.$parsers.push(myValidation);
            }
        };
    }
})();

