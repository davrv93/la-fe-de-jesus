
app.controller("MainCtrl", function ($scope, $stateParams, $state) {
    $scope.next = $stateParams.next;

    $scope.goSessions = function(){
        $state.go('sessions.one');
    };

    $scope.goSession = function(state){
        $state.go(state);
    };

    $scope.lessons =[
        {
            "order":1,
            "title": "Lo que enseña la Biblia acerca de Dios",
            "state":"sessions.one"
        },
        {
            "order":2,
            "title": "La Santa Biblia",
            "state":"sessions.two"
        }
    ]
});

