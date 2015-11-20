angular.module('BooksGUI')
    .directive('navigationMenu', function (){
        return {
            restrict: 'E',
            templateUrl: '_directives/navigation.html',
            transclude: true,
            scope: {},
            controller: function ($scope) {
            }
        }
    });