angular.module('BooksGUI')
    .directive('favoriteBooks', function () {
        return {
            restrict: 'E',
            templateUrl: '_directives/favorite.html',
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

                    $http.get('http://localhost:3000/favoritebooks')
                        .then(function (response) {
                            $scope.books = response.data;
                            $scope.numberOfPages = Math.ceil($scope.books.length / $scope.pageSize);
                            $scope.currentPage = 0;

                        });
                };
                initNewList();
                $scope.deleteFromFavorite = function(favoriteBook){
                    $http.delete('http://localhost:3000/favoriteBooks/' + favoriteBook._id)
                        .then(function(){
                            initNewList();
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