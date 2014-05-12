

var app = angular.module('myApp', []);

/*
app.directive("passwordCheck", function() {
   return {
      require: "ngModel",
      scope: {
        passwordCheck: '='
      },
      link: function(scope, element, attrs, ctrl) {
        scope.$watch(function() {
            var combined;

            if (scope.passwordVerify || ctrl.$viewValue) {
               combined = scope.passwordVerify + '_' + ctrl.$viewValue; 
            }                    
            return combined;
        }, function(value) {
            if (value) {
                ctrl.$parsers.unshift(function(viewValue) {
                    var origin = scope.passwordVerify;
                    if (origin !== viewValue) {
                        ctrl.$setValidity("passwordVerify", false);
                        return undefined;
                    } else {
                        ctrl.$setValidity("passwordVerify", true);
                        return viewValue;
                    }
                });
            }
        });
     }
   };
});*/

app.controller('registrationForm', function($scope){
    
    $scope.master = $scope.user;
    
    $scope.isUnchanged = function(user) {
        //console.log(user);
        return angular.equals(user, $scope.master);
    };

    
    $scope.save = function(user){
        $scope.master = angular.copy(user);
    };
});