angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('en_GB', {"Favorites":"Favorites","Home":"Home","List":"List"});
    gettextCatalog.setStrings('pl_PL', {"Favorites":"Ulubione","Home":"Główne","List":"Lista"});
/* jshint +W100 */
}]);