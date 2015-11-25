angular.module('BooksGUI')
    .directive('listContent', function (){
        return {
            restrict: 'E',
            templateUrl: '_directives/list.html',
            transclude: true,
            scope: {},
            controller: function ($scope, $http) {
                $scope.books = [];
                $scope.currentPage = 0;
                $scope.pageSize = 20;
                $scope.numberOfPages = 0;

                $http.get('http://localhost:8080/books-filter/web/app_dev.php?format=pretty')
                    .then(function(response){
                        $scope.books = response.data;
                        $scope.numberOfPages = Math.ceil($scope.books.length/$scope.pageSize);
                    });
                $scope.sortType = 'book.itemTitle';
                $scope.sortReverse = false;
            }
        }
    })

    .filter('startBy', function (){
        return function(collection, start) {
            start = +start;
            var _collection = angular.copy(collection);
            return _collection.splice(start);
        }
    })

    .directive('refreshBookList', function($scope, $http) {
        $http.get('http://localhost:3000/books')
            .then(function(response){
                $scope.books = response.data;
                $scope.numberOfPages = Math.ceil($scope.books.length/$scope.pageSize);
            });
    });