var app=angular.module("blog",["ngRoute"]);app.config(function(t){t.when("/",{templateUrl:"tpl/home.html",controller:"homeCtrl"}).when("/gulp",{templateUrl:"tpl/gulp.html"}).when("/this",{templateUrl:"tpl/this.html"}).when("/jiqiao",{templateUrl:"tpl/jiqiao.html",controller:"jiqiaoCtrl"}).when("/comment",{templateUrl:"tpl/comment.html"}).when("/moban",{templateUrl:"tpl/moban.html"}).when("/kuayu",{templateUrl:"tpl/kuayu.html"}).when("/mobile",{templateUrl:"tpl/mobile.html"}).when("/stickey",{templateUrl:"tpl/stickey.html"}).when("/timu",{templateUrl:"tpl/timu.html",controller:"timuCtrl"}).when("/reg",{templateUrl:"tpl/reg.html"}).when("/zuopin",{templateUrl:"tpl/zuopin.html"}).when("/es6",{templateUrl:"tpl/es6.html"}).otherwise({redirectTo:"/"})}),app.run(["$rootScope","$location",function(t,e){t.$on("$routeChangeStart",function(t,e,l){console.log("route begin change")}),t.$on("$routeChangeSuccess",function(t,l,o){console.log("route have already changed ："+e.path())})}]);