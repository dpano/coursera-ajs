(function(){
    "use strict";
    
    angular.module('common')
            .service('userService', UserService);
    
    UserService.$inject = ['$http'];
    function UserService($http){
         var service = this;
         
    }
})();

