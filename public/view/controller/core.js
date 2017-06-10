angular.module('mywebsite', ['Project','login','Contact', 'httpRoutes', 'register']);

angular.module('login', ['ngFlash','ngCookies','register','FlashService','UserService']);
//
angular.module('register', ['FlashService','ngFlash','UserService']);

// angular.module('video');

// angular.module("mywebsite",[]);
