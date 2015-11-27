
angular.module('BooksGUI', [
    'ui.router'
])
    .controller('BooksController', function($scope){
        $scope.books = [];
    })

    .controller('BooksGUIController', function ($scope) {})

    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/homepage');

        $stateProvider
            .state('newBooks',{
                url:'/newBooks',
                templateUrl: 'views/newBooks.html'
            })
            .state('homepage',{
                url:'/homepage',
                templateUrl: 'views/homepage.html'
            })
            .state('bookList',{
                url:'/bookList',
                templateUrl:'views/bookList.html'
            })
            .state('favoriteBook',{
                url:'/favoriteBook',
                templateUrl:'views/favoriteBook.html'
            })
            .state('logOut',{
                url:'/logOut',
                templateUrl:'views/logOut.html'
            })
            .state('ePubViewer', {
                url:'/ePubViewer',
                templateUrl:'views/ePubViewer.html'
            })
    });


