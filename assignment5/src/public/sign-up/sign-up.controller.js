(function () {
    "use strict";

    angular.module('public')
            .controller('SignupController', SignupController);

    SignupController.$inject = ['$http', 'ApiPath'];
    function SignupController($http, ApiPath) {
        var signupCtrl = this;   
        signupCtrl.user =  {} ;
        signupCtrl.user.favorite = false;
        signupCtrl.signup = function(){
            console.log("sdf: " + signupCtrl.user.fname);
        }
        
        signupCtrl.checkFavorite = function(){
            return $http.get(ApiPath + '/menu_items/' + signupCtrl.user.shortName + '.json').then(function (response) {
                return true;
              }, function (error){
                  return false;
              });
             
            
        }
    }
})();

