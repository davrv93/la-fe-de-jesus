
 angular.module("geventos", [])
 .controller("SessionOneCtrl", SessionOneCtrl);

 function SessionOneCtrl($scope, $state) {
    $scope.check = function(item,option){
        console.log(item);
        console.log(option);
        if(option=="true"){
            console.log('A');
            item['result']=true;
        }else{
            console.log('B');
            item['result']=false;
        }

    };
    $scope.suggestions= [
        {
            "order":1,
            "content":"Respetar el nombre de Dios",
            "bible_verse":"Éxodo 20:7",
            "result":null,
            "verse":[
                {
                    "content":"No tomarás el nombre de Jehová tu Dios en vano; porque no dará por inocente Jehová al que tomare su nombre en vano.",
                    "chapter":"20",
                    "verse":"7"
                }
            ],
        },
        {
            "order":2,
            "content":"Obedecer a Dios",
            "bible_verse":"Hechos 5:29",
            "result":null,
            "verse":[
                {
                    "content":"Respondiendo Pedro y los apóstoles, dijeron: Es necesario obedecer a Dios antes que a los hombres.",
                    "chapter":"5",
                    "verse":"29"
                }
            ],
        },
        {
            "order":3,
            "content":"Poner a Dios en primer lugar",
            "bible_verse":"Mateo 6:33",
            "result":null,
            "verse":[
                {
                    "content":"Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.",
                    "chapter":"6",
                    "verse":"33"
                }
            ],
        },
        {
            "order":4,
            "content":"Amar a Dios de todo corazón",
            "bible_verse":"Mateo 22:37",
            "result":null,
            "verse":[
                {
                    "content":"Jesús le dijo: Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente.",
                    "chapter":"22",
                    "verse":"37"
                }
            ],
        }
    ];
    $scope.questions= [
        {
            "order":1,
            "question":"¿Cuántos dioses hay?",
            "bible_verse":"Efesios 4:6",
            "result":null,
            "verse":[
                {
                    "content":"un Dios y Padre de todos, el cual es sobre todos, y por todos, y en todos.",
                    "verse":"6",
                    "chapter":"4"
                }
            ],
            "choices":[
                {
                    "order":1,
                    "content":"Hay muchos dioses",
                    "isCorrect":false
                },
            
                {
                    "order":2,
                    "content":"Hay un solo Dios",
                    "isCorrect":true
                },
                {
                        "order":3,
                        "content":"Hay dos dioses",
                        "isCorrect":false
                }
            ]
            
        },
        {
            "order":2,
            "question":"¿Cuál es la naturaleza de Dios?",
            "bible_verse":"Juan 4:24",
            "result":null,
            "verse":[
                {
                    "content":"Dios es Espíritu; y los que le adoran, en espíritu y en verdad es necesario que adoren.",
                    "verse":"24",
                    "chapter":"4"
                }
            ],
            "choices":[
                {
                    "order":1,
                    "content":"De naturaleza física",
                    "isCorrect":false
                },
            
                {
                    "order":2,
                    "content":"De naturaleza carnal",
                    "isCorrect":false
                },
                {
                        "order":3,
                        "content":"De naturaleza espiritual",
                        "isCorrect":true
                }
            ]
        },
        {
            "order":3,
            "question":"¿Cuáles son las tres personas de la Trinidad?",
            "bible_verse":"2 Corintios 13:14",
            "result":null,
            "verse":[
                {
                    "content":"La gracia del Señor Jesucristo, el amor de Dios, y la comunión del Espíritu Santo sean con todos vosotros. Amén.",
                    "verse":"14",
                    "chapter":"13"
                }
            ],
            "choices":[
                {
                    "order":1,
                    "content":"Padre, Hijo y Espíritu Santo",
                    "isCorrect":true
                },
            
                {
                    "order":2,
                    "content":"Padre e Hijo",
                    "isCorrect":false
                },
                {
                        "order":3,
                        "content":"Otros",
                        "isCorrect":false
                }
            ]
        },
        {
            "order":4,
            "question":"¿Cómo es el carácter de Dios?",
            "bible_verse":"1 Juan 4:8",
            "result":null,
            "verse":[
                {
                    "content":"El que no ama, no ha conocido a Dios; porque Dios es amor.",
                    "verse":"8",
                    "chapter":"4"
                }
            ],
            "choices":[
                {
                    "order":1,
                    "content":"Justicia y Honra",
                    "isCorrect":false
                },
            
                {
                    "order":2,
                    "content":"Juicio y Poder",
                    "isCorrect":false
                },
                {
                    "order":3,
                    "content":"Amor",
                    "isCorrect":true
                }
            ]
        },
        {
            "order":5,
            "question":"¿Cómo nos considera Dios?",
            "bible_verse":"1 Juan 3:1-2",
            "result":null,
            "verse":[
                {
                    "content":"Mirad cuál amor nos ha dado el Padre, para que seamos llamados hijos de Dios;por esto el mundo no nos conoce, porque no le conoció a él",
                    "verse":"1",
                    "chapter":"3"
                },
                {
                    "content":"Amados, ahora somos hijos de Dios, y aún no se ha manifestado lo que hemos de ser; pero sabemos que cuando él se manifieste, seremos semejantes a él, porque le veremos tal como él es.",
                    "verse":"2",
                    "chapter":"3"
                }
            ],
            "choices":[
                {
                    "order":1,
                    "content":"Criaturas",
                    "isCorrect":false
                },
            
                {
                    "order":2,
                    "content":"Siervos",
                    "isCorrect":false
                },
                {
                    "order":3,
                    "content":"Hijos amados",
                    "isCorrect":true
                }
            ]
        },
        {
            "order":6,
            "question":"¿Se preocupa Dios por nuestros problemas?",
            "bible_verse":"1 Juan 4:8",
            "result":null,
            "verse":[
               
                {
                    "content":"El que no ama no ha conocido a Dios, porque Dios es amor.",
                    "verse":"8",
                    "chapter":"4"
                }
            ],
            "choices":[
                {
                    "order":1,
                    "content":"No",
                    "isCorrect":false
                },
            
                {
                    "order":2,
                    "content":"Sí y mucho",
                    "isCorrect":false
                },
                {
                    "order":3,
                    "content":"Algunas veces",
                    "isCorrect":true
                }
            ]
        }

    ]
    $scope.goSessions = function(){
        $state.go('sessions.one');
    };
};