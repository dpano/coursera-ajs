(function (){
    "use strict";
    angular.module('public')
            .controller('MyInfoController', MyInfoController);
    MyInfoController.$inject = ['myinfo', 'ApiPath', 'mymenu']
    function MyInfoController(myinfo, ApiPath, mymenu){
        var myInfoCtrl = this;
         myInfoCtrl.myinfo = myinfo;
         myInfoCtrl.mymenu = mymenu;
         myInfoCtrl.apipath = ApiPath;
    }
})();