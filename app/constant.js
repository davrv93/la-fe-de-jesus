(function () {
    "use strict";
    var authUrl = "http://localhost:7001";

    var apiUrl = "http://localhost:8003";

    var searchUser = apiUrl + "/api/search/persona?q=";

    app.constant("CLIENTE_ID", "Q5dzu0INVq74WhMrss5xVYDtRrMmF35a7sJoTPe3"); //LOCAL

    app.constant("authUrl", authUrl);
    app.constant("apiUrl", apiUrl);

    app.constant("mdToastPosition", 'top right');

    app.constant("mdToastHideDelay", 3000);

    var url_api = {
        authentication: 'http://erplogin-dev.upeu/',
        renew_token: 'http://localhost:7001/o/token/',
        logout: 'http://localhost:7001/o/revoke_token/',
        authorize: 'http://localhost:7001/o/authorize/',
        isAuthorize: 'http://127.0.0.1:7001/o/is-authorize/',
        socket: 'wss://ws-erp.upeu.edu.pe/',
        auth_xe: 'http://localhost:7600/api',
        config: 'http://localhost:7400/api',
        admision: 'http://localhost:7900/api',
        instrumento: 'http://localhost:7100/api',
        instrumento_v2: 'http://localhost:8000/api',
        academico: 'http://localhost:7500/api',
        financiero: 'http://localhost:7300/api',
        infraestructura: 'http://localhost:7200/api',
        logistica: 'http://localhost:7000/api',

    };


    var url_app = {
        erp_index: 'http://localhost/',
        login: 'http://localhost:9002/login/'
    };
    app.constant("urlApp", url_app);
    app.constant("urlApi", url_api);


})();
