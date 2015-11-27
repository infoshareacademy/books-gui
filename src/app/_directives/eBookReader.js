angular.module('BooksGUI')
    .directive('eBookReader', function (){
        return {
            restrict: 'E',
            templateUrl: '_directives/eBookReader.html',
            transclude: true,
            scope: {},
            controller: function ($scope) {
                $scope.Book = ePub("../../exampleBooks/Moby-Dick.epub");

                $scope.Book.renderTo("area");

            }
        }

    });
