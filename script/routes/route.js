/*路由的设置*/
    lmapp.config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/index',{
                templateUrl: "views/index.html",
                controller:"indexCtrl"
            })
            .when('/tingshuo',{
                templateUrl: "views/tingshuo.html",
                controller:"tsCtrl"
            })
            .when('/liaoliao',{
                templateUrl: "views/liaoliao.html",
                controller: "llCtrl"
            })
            .when('/sheqv',{
                templateUrl: "views/sheqv.html",
                controller: "sqCtrl"
            })
            .when('/lanmeijiang',{
                templateUrl: "views/lanmeijiang.html",
                controller: "lmjCtrl"
            })
            .otherwise({
                redirectTo:"/index"
            });
    }]);
/*define(['lmapp'],function(lmapp){
    return lmapp.config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/index',{
                templateUrl: 'views/index.html',
                controller: 'indexCtrl'
            })
            .when('/tingshuo',{
                templateUrl: 'views/tingshuo.html',
                controller: 'tsCtrl'
            })
            .when('/',{
                templateUrl: 'views/liaoliao.html',
                controller: 'llCtrl'
            })
            .when('/jam',{
                templateUrl: 'views/jam.html',
                controller: 'jamCtrl'
            })
            .when('/sheqv',{
                templateUrl: 'views/sheqv.html',
                controller: 'sheqvCtrl'
            })
            .otherwise({ redirectTo: '/'});
    }]);
})*/