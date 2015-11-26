angular.module('BooksGui', [])
    .controller('BaseController', function ($scope, $http) {

        $scope.books = [];
        //$scope.currentPage = 0;
        //$scope.pageSize = 10;
        //$scope.numberOfPages = 0;


        $scope.getBooks = function() {
            $http.get('http://localhost:8080/books-filter/web/app_dev.php')
                .then(function (response) {
                    $scope.books = response.data;

                });
        };
        $scope.getBooks();

        $scope.getHttpStatus = function() {
            $http.get('http://localhost:8080/books-filter/web/app_dev.php')
                .then(function (response) {
                    $scope.responseStatus = response.status;

                });
        };
        $scope.getHttpStatus();

        $scope.getStatusText = function() {
            $http.get('http://localhost:8080/books-filter/web/app_dev.php')
                .then(function (response) {
                    $scope.statusText = response.statusText;

                });
        };
        $scope.getStatusText()
    })



    .filter('startBy', function(){
       return function(collection, start){
           start = +start;
           var _collection = angular.copy(collection);
           return _collection.splice(start);
       }

    });

