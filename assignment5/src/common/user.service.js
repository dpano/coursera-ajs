(function () {
    "use strict";

    angular.module('common')
            .service('userService', UserService);

    UserService.$inject = ['$http', '$q'];
    function UserService($http, $q) {
        var service = this;
        
        service.signup = function (myInfo) {           
            service.myInfo = myInfo;
            return true;
        }

        service.getMyInfo = function () {           
            if (angular.isUndefined(service.myInfo) || service.myInfo === null) {
                return {};
            } else {
                return service.myInfo;
            }           

        };
        
        service.setSelectedMenu = function (selectedMenu) {           
            service.myMenu = selectedMenu;
        }
        service.getSelectedMenu = function () {           
            return service.myMenu;
        }
    }
})();

