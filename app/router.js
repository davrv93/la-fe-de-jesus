app.constant("ROUTERS", [{
    geventos: {
        url: "/geventos?:evento",

        views: {
            "": {
                templateProvider: function ($templateCache) {
                    return $templateCache.get('layout.html');
                },
                controller: 'MainCtrl',
                controllerAs: 'mctrl'

            }
        },
        serie: true,
        lazyComponent: [
            'app/styles/simple_sidebar.css',
            'app/controllers/main.js',
            'app/views/templates/layout-bootstrap.html',
            'app/views/templates/aside-ui-bootstrap.html'],
        loginRequired: true,
        resolve: {
            get_translate: function ($translatePartialLoader, $translate) {
                $translatePartialLoader.addPart('app/views/templates/translate');
                return $translate.refresh();
            },
        }
    },
    
    "sessions":{
        url: "/lecciones",
        data: {
            page: "Lecciones"
        },
        views: {
            "": {
                //templateUrl: "dist/views/layouts/401_unauthorized.html"
            }
        }
    },
    "sessions.one":{
        url: "/uno",
        data: {
            page: "Error 401: unauthorized"
        },
        serie: true,
        lazyComponent: [
            'modules/session/n1/css/style.css',
            'modules/session/n1/controllers/index.js'],
        templateUrl: "modules/session/n1/views/index.html",
        controller:"SessionOneCtrl",
        controllerAs:"s1"
        
    },
    "sessions.two":{
        url: "/dos",
        data: {
            page: "Error 401: unauthorized"
        },
        serie: true,
        lazyComponent: [
            'modules/session/n2/css/style.css',
            'modules/session/n2/controllers/index.js'],
        templateUrl: "modules/session/n2/views/index.html",
        controller:"SessionTwoCtrl",
        controllerAs:"s2"
        
    },
    "geventos.401_unauthorized": {
        url: "/401_unauthorized",
        data: {
            page: "Error 401: unauthorized"
        },
        views: {
            "": {
                templateUrl: "dist/views/layouts/401_unauthorized.html"
            }
        }
    },
    "geventos.dashboard": {
        url: "/dashboard",
        data: {
            page: "Dashboard"
        },
        controller: 'DashboardCtrl',
        controllerAs: "ctrl",
        templateUrl: "src/dashboard/index.html",
        lazyComponent: ['src/dashboard/controller.js']
    },
    "geventos.portal.**": {
        url: "/portal",
        serie: true,
        lazyLoad: function ($transition$) {
            return $transition$.injector().get('$ocLazyLoad').load(
                'src/portal/router.js'
            );
        }
    },
    "geventos.report.**": {
        url: "/report",
        serie: true,
        lazyLoad: function ($transition$) {
            return $transition$.injector().get('$ocLazyLoad').load(
                'src/report/router.js'
            );
        }
    },
    "geventos.configuration.**": {
        url: "/configuration",
        serie: true,
        lazyLoad: function ($transition$) {
            return $transition$.injector().get('$ocLazyLoad').load(
                'src/configuration/router.js'
            );
        }
    },
    "geventos.control.**": {
        url: "/control",
        serie: true,
        lazyLoad: function ($transition$) {
            return $transition$.injector().get('$ocLazyLoad').load(
                'src/control/router.js'
            );
        }
    }
},
{
    "geventos.registry.inscription": {
        url: "/inscription",
        data: {
            section: "Registro",
            page: "Inscripción"
        },
        templateUrl: "dist/views/registry/inscription/index.html"
    },


}

]);
