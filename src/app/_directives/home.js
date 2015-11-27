angular.module('BooksGUI')
    .directive('homepageContent', function (){
        return {
            restrict: 'E',
            templateUrl: '_directives/home.html',
            transclude: true,
            scope: {},
            controller: function ($scope) {
            }
        }
    });