/*
 * calvinHobbesApp
 *
 * Init app.
 */
var app = angular.module('calvinHobbesApp', ['angular-loading-bar']);


// turn the loading spinner off, keep the loading line
app.config(['cfpLoadingBarProvider', function (loadingBarProvider) {
    loadingBarProvider.includeSpinner = false;
}])
