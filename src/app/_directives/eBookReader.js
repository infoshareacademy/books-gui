angular.module('BooksGUI')
    .directive('eBookReader', function (){
        return {
            restrict: 'E',
            templateUrl: '_directives/eBookReader.html',
            transclude: true,
            scope: {},
            controller: function ($scope) {
                $scope.Book = ePub("https://s3.amazonaws.com/moby-dick/");

                $scope.Book.renderTo("area");

            }
        }

    });
