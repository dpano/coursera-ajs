(function () {
    'use strict';
    angular.module('LunchCheck', [])
            .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.message = "";
        var numOfLunches = 0;
        $scope.showMessage = function () {
            numOfLunches = lunchesEntered($scope.lunch);
            $scope.message = message(numOfLunches);
        }

        function lunchesEntered(string) {
            if (typeof string === "undefined") {
                return 0;
            }

            var arrayValues = string.trim()
                    .split(",")
                    .filter(function (el) {
                        el = el.trim();
                        return el.length !== 0;
                    });
            return arrayValues.length;
        }

        function message(numOfLunches) {
            if (numOfLunches == 0) {
                return 'Please enter data first';
            } else if (numOfLunches <= 3) {
                return 'Enjoy!'
            }
            return 'Too much!';

        }
    }
})()