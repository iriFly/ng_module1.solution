(function() {
    'use strict';

    angular.module('LunchCounter', [])
    .controller("LunchController", LunchController);

    Controller.inject = ['$scope'];
    function Controller($scope) {
        $scope.value = "Please enter data.";
        $scope.food = "";
        $scope.colour = "#000000"

        var splitInput = function (separator) {
            return separator.split(',');
        }

        // Finds split length excluding whitespaces and empty strings
        var splitLength = function (array) {
            var length = array.length;
            var x =0;
            for (x in array) {
                if (array[x].trim() == "") {
                    length-= 1;
                }
            }
            return length;
        }

        $scope.checkItem = function() {
            var array = splitInput($scope.food);
            var length = splitLength(array);
            if (length == 0){
                $scope.value = "Please enter data first.";
                $scope.colour = "red";
            }
            else if (length <= 3) {
                $scope.value = "Enjoy!";
                $scope.colour = "green";
            }
            else {
                $scope.value = "Too much!";
                $scope.colour = "green";
            }
        }
    };

})();
