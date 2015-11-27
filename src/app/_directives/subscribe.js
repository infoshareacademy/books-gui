angular.module('BooksGUI')
    .directive('subscribe', function(){
        return {
            restrict: 'E',
            templateUrl: '_directives/subscribe.html',
            transclude: true,
            scope: {},
            controller: function ($scope, $http) {
                $scope.subscriber = {
                    name: '',
                    email: ''
                };
                $scope.addSubscriber = function(){
                    if($scope.subscriber.name.length && $scope.subscriber.email.length){
                        $http.post('http://localhost:3000/subscribers', $scope.subscriber)
                            .success(function(res){
                                $scope.subscriptionMessage = 'Succesfully added subscriber'
                            })
                            .error(function(res){
                                $scope.subscriptionMessage = 'Could not add subscriber'
                            })
                    }
                }
            }
        }
    });