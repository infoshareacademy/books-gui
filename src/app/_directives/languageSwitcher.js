angular.module('BooksGUI')
    .directive('languageSwitcher', function () {
        return {
            restrict: 'E',
            templateUrl: '_directives/languageSwitcher.html',
            scope: {},
            controller: function ($scope, gettextCatalog) {
                $scope.currentLanguage = 'en_GB';

                $scope.changeLanguage = function () {
                    gettextCatalog.setCurrentLanguage($scope.currentLanguage);
                }
            }
        }
    });