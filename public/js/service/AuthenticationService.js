angular.module('login')
  .factory('AuthenticationService',AuthenticationService);

  AuthenticationService.$inject = ['$http', '$cookies', '$timeout', 'UserService'];

  function AuthenticationService($http, $cookies, $rootScope, $timeout, UserService){
    var service = {};
    service.Login = Login;
    service.setCredentials = setCredentials;
    service.ClearCredentials = ClearCredentials;

    return service;

    function Login(username, password, callback){
      // $timeout(function(){
      //   var response;
      //   UserService.GetByUsername(username)
      //     .then(function(user){
      //       if(user!=null && user.password == password){
      //         response = {success:true};
      //       }
      //       else {
      //         response = {success:false, message: 'username or password is incorrect'};
      //       }
      //       callback(response);
      //     })
      //     .catch(function(err){
      //       callback(err);
      //     });
      // }, 1000);
        $http.post('/api/authenticate', {'username':username, 'password':password})
          .success(function(res){
            if(res!==null && res.data!==null && res.data!==undefined)
              res.success = true;
            callback(res);
          })
          .catch(function(err){
            callback(err);
          });

    }

    function setCredentials(username, password){
      var authData = Base64.encode(username + ':' + password);
      $rootScope.globals = {
        currentUser : {
          username:username,
          authData:authData
        }
      };

      //set default auth header for http request
      $http.defaults.headers.common['Authorization'] = 'Basic '+ authData;

      var cookieExp = new Date();
      cookieExp.setDate(cookieExp.getDate()+7);
      $cookies.putObject('globals', $rootScope.globals, {expires:cookieExp});
    }

    function ClearCredentials(){
      $rootScope.globals = {};
      $cookies.remove('globals');
      $http.defaults.headers.common.Authorization = 'Basic';
    }
    var Base64 = {

        keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                    this.keyStr.charAt(enc1) +
                    this.keyStr.charAt(enc2) +
                    this.keyStr.charAt(enc3) +
                    this.keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);

            return output;
        },

        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                window.alert("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            do {
                enc1 = this.keyStr.indexOf(input.charAt(i++));
                enc2 = this.keyStr.indexOf(input.charAt(i++));
                enc3 = this.keyStr.indexOf(input.charAt(i++));
                enc4 = this.keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";

            } while (i < input.length);

            return output;
        }
    };


  }
