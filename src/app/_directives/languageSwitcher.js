angular.module('BooksGUI')
    .directive('languageSwitcher', function () {
        return {
            restrict: 'E',
            templateUrl: '_directives/languageSwitcher.html',
            scope: {},
            controller: function ($scope, gettextCatalog) {
                $scope.currentLanguage = 'pl_PL';

                $scope.changeLanguage = function () {
                    gettextCatalog.setCurrentLanguage($scope.currentLanguage);
                }
            }
        }
    });