var app = angular.module("geventos", [
    //'core.oauth',
    //'core.interceptor',
    //'core.menu',
    //'core.evento',
    //'core.api',
    'LocalStorageModule',
    'ui.router',
    'ngResource',
    'ngAnimate',
    'ngAria',
    'ngSanitize',
    'ngMessages',
    'pascalprecht.translate',
    'ui.mask',
    'oc.lazyLoad',
    'pascalprecht.translate',
    'core.loading',
    'htmlToPdfSave',
    'angular.filter'

]);

app

    .config(function ($ocLazyLoadProvider) {

        $ocLazyLoadProvider.config({
            events: true
        });

    });

app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);


app.filter('capitalize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    };
});
