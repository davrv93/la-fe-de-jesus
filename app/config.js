
app

//==================================
// Interceptors de la app
//==================================
.config(function ($httpProvider) {
    // interceptor en HTTP
    //$httpProvider.interceptors.push('authInterceptorService');

})


//==================================
// para activar $resource https://docs.angularjs.org/api/ngResource/service/$resource
//==================================
.config(function ($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;

})


//==================================
    // routers de la app
    //==================================
    .config(function ($stateProvider, $urlRouterProvider, ROUTERS) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url: '/home',
                controller:'MainCtrl',
                templateUrl: '/modules/main/index.html',
                loginRequired: false
            });


        ROUTERS.forEach(function (collection) {
            for (var routeName in collection) {
                $stateProvider.state(routeName, collection[routeName]);
            }
        });


    })

//====================================================
// idiomas escaping
//====================================================
.config(function ($translateProvider) {
    // Enable escaping of HTML
    $translateProvider.useSanitizeValueStrategy('escape');
    // Enable escaping of HTML
    $translateProvider.useSanitizeValueStrategy('escapeParameters');
})

app

//====================================================
// Permite acceder a $state and $stateParams desde cualquier parte de la pp
//====================================================
//.run(function ($rootScope, $state, $stateParams, $window, $http,$mdTheming) {
.run(function ($rootScope, $state, $stateParams, $window, $http) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $http.defaults.headers.post["Content-Type"] = "application/json";

})


app.run(initial);

initial.$inject = ['$rootScope', '$transitions', '$q', '$ocLazyLoad'];

function initial($rootScope, $transitions, $q, $ocLazyLoad) {


function hasLazyComponent(state) {
    return state.lazyComponent != null;
}

function loadComponent(state) {
    $rootScope.loading = true;
    return $ocLazyLoad.load({
        serie: state.serie ? state.serie : false,
        files: state.lazyComponent
    }).then(function () {
        $rootScope.loading = false;
        delete state.lazyComponent;
    });
}

function lazyLoadComponents($transition$) {
    var promises = $transition$.entering().filter(hasLazyComponent).map(loadComponent);
    return $q.all(promises);
}

var transitionCriteria = { entering: hasLazyComponent };
$transitions.onBefore(transitionCriteria, lazyLoadComponents);


function hasPreviousRequest(state) {
    return state.previousRequest != null;
}

function doRequest(state) {

    $ocLazyLoad.load({
        serie: state.serie ? state.serie : false,
        files: state.previousComponents
    }).then(function () {
        $q.all(state.previousRequest()).then(function (data) {
            console.log(data, 'data');
        });
    });
}

function lazyLoadRequests($transition$) {
    var promises = $transition$.entering().filter(hasPreviousRequest).map(doRequest);
    return $q.all(promises);
}

var transitionCriteriaRequest = { entering: hasPreviousRequest };
$transitions.onBefore(transitionCriteriaRequest, lazyLoadRequests);


}
