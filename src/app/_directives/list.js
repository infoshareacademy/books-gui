angular.module('BooksGUI')
    .directive('listContent', function () {
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
                $scope.sortType = 'book.itemTitle';
                $scope.sortReverse = false;

                var initNewList = function () {

                    $http.get('http://localhost:8080/books-filter/app_dev.php?format=pretty')
                        .then(function (response) {
                            $scope.books = response.data;
                            $scope.numberOfPages = Math.ceil($scope.books.length / $scope.pageSize);
                            $scope.currentPage = 0;

                        });
                };

                initNewList();

                $scope.refreshList = function () {
                    $http.post('http://localhost:3000/books')
                        .then(function () {
                            console.log('marek');
                            initNewList();
                        });
                };
                $scope.addToFavorite = function(favoriteBook){
                    $http.post('http://localhost:3000/favoriteBooks', favoriteBook)
                        .then(function(response){
                            console.log(response);
                        })
                }
            }
        }
    })

    .filter('startBy', function () {
        return function (collection, start) {
            start = +start;
            return collection.splice(start);
        }
    });