angular.module('BooksGUI')
    .directive('eBookReader', function (){
        return {
            restrict: 'E',
            templateUrl: '_directives/eBookReader.html',
            transclude: true,
            scope: {},
            controller: function ($scope) {
            }
        }
    });
