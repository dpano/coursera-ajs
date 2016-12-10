(function () {
    "use strict";

    angular.module('public')
            .controller('SignupController', SignupController);

    SignupController.$inject = ['$http', 'ApiPath','userService'];
    function SignupController($http, ApiPath, userService) {
        var signupCtrl = this;   
        signupCtrl.user =  {} ;
        signupCtrl.saved = false;
        signupCtrl.showForm = userService.getMyInfo();
        signupCtrl.signup = function(){
            signupCtrl.saved = userService.signup(signupCtrl.user);
            
        }
        
        
    }
})();

