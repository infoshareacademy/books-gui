angular.module('BooksGUI')
    .directive('listContent', function (){
        return {
            restrict: 'E',
            templateUrl: '_directives/list.html',
            transclude: true,
            scope: {},
            controller: function ($scope, $http) {
                $scope.books = [];

                $http.get('http://localhost:8080/books-filter/web/app_dev.php?format=pretty')
                    .then(function(response){
                        $scope.books = response.data
                    });
                $scope.sortType = 'book.itemTitle';
                $scope.sortReverse = false;
            }
        }
    });