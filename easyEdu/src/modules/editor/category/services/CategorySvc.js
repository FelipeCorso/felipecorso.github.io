define(function() {
    'use strict';
    Service.$inject = ['$http', '$q', "AuthorizationSvc"];
    /*@ngInject*/
    function Service($http, $q, AuthorizationSvc) {
        var categories = {};
        var service = {};

        service.get = get;
        service.add = add;
        service.createQrCodeJson = createQrCodeJson;

        categories = {
            "1": {
                "name": "Figuras geométricas",
                "image": {"link": "http://escolakids.uol.com.br/public/images/legenda/10c1181b437fed906146f859a4b9f898.jpg"},
                "activities": [
                    {
                        "tip": "Arraste apenas as figuras que representam quadrados",
                        level: "EASY",
                        "type": "PICTURES",
                        answers: [],
                        correctAnswers: 4,
                        answerOptions: [
                            {
                                "image": {
                                    "link": "http://192.168.0.105:7070/uploads/bandeira Santa Catarina.jpg",
                                    "name": "bandeira Santa Catarina.jpg"
                                },
                                type: 'correct'
                            },
                            {
                                "image": {
                                    "link": "http://192.168.0.105:7070/uploads/bandeira-rio-grande-do-sul.jpg",
                                    "name": "bandeira-rio-grande-do-sul.jpg"
                                },
                                type: 'incorrect'
                            },
                            {
                                "image": {
                                    "link": "http://192.168.0.105:7070/uploads/bandeira_parana.jpg",
                                    "name": "bandeira parana.jpg"
                                },
                                type: 'correct'
                            },
                            {
                                "image": {
                                    "link": "http://192.168.0.105:7070/uploads/bandeira Santa Catarina.jpg",
                                    "name": "bandeira Santa Catarina.jpg"
                                },
                                type: 'correct'
                            },
                            {
                                "image": {
                                    "link": "http://192.168.0.105:7070/uploads/bandeira-rio-grande-do-sul.jpg",
                                    "name": "bandeira-rio-grande-do-sul.jpg"
                                },
                                type: 'incorrect'
                            },
                            {
                                "image": {
                                    "link": "http://192.168.0.105:7070/uploads/bandeira_parana.jpg",
                                    "name": "bandeira parana.jpg"
                                },
                                type: 'correct'
                            }
                        ]
                    },
                    {
                        "tip": "Arraste apenas as figuras que representam retângulos",
                        level: "MEDIUM",
                        "type": "PICTURES",
                        answers: [],
                        correctAnswers: 2,
                        answerOptions: [
                            {
                                "image": {
                                    "link": "http://192.168.0.105:7070/uploads/bandeira Santa Catarina.jpg",
                                    "name": "bandeira Santa Catarina.jpg"
                                },
                                type: 'correct'
                            },
                            {
                                "image": {
                                    "link": "http://192.168.0.105:7070/uploads/bandeira-rio-grande-do-sul.jpg",
                                    "name": "bandeira-rio-grande-do-sul.jpg"
                                },
                                type: 'incorrect'
                            },
                            {
                                "image": {
                                    "link": "http://192.168.0.105:7070/uploads/bandeira_parana.jpg",
                                    "name": "bandeira parana.jpg"
                                },
                                type: 'correct'
                            },
                            {
                                "image": {
                                    "link": "http://192.168.0.105:7070/uploads/bandeira Santa Catarina.jpg",
                                    "name": "bandeira Santa Catarina.jpg"
                                },
                                type: 'correct'
                            },
                            {
                                "image": {
                                    "link": "http://192.168.0.105:7070/uploads/bandeira-rio-grande-do-sul.jpg",
                                    "name": "bandeira-rio-grande-do-sul.jpg"
                                },
                                type: 'incorrect'
                            },
                            {
                                "image": {
                                    "link": "http://192.168.0.105:7070/uploads/bandeira_parana.jpg",
                                    "name": "bandeira parana.jpg"
                                },
                                type: 'correct'
                            }
                        ]
                    }
                ]
            },
            "2": {
                "name": "Bandeiras estados do Sul",
                "image": {"link": "https://upload.wikimedia.org/wikipedia/commons/0/09/Mapa_Regiao_Sul_do_Brasil_(somente).PNG"},
                "activities": [
                    {
                        "answer": "Paraná",// "Paraná"
                        //"answer": "P",// "Paraná"
                        "type": "LETTERS",
                        "level": "EASY",
                        "tip": "Estado sul brasileiro",
                        "time": "05:00",
                        "files": {
                            "image": {
                                "link": "http://192.168.0.105:7070/uploads/bandeira_parana.jpg",
                                "name": "bandeira parana.jpg"
                            }
                        }
                    },
                    {
                        "$$hashKey": "object:35",
                        "answer": "Santa Catarina",
                        "type": "LETTERS",
                        "tip": "Estado sul brasileiro",
                        "time": "15:00",
                        "level": "MEDIUM",
                        "files": {
                            "image": {
                                "link": "http://192.168.0.105:7070/uploads/bandeira Santa Catarina.jpg",
                                "name": "bandeira Santa Catarina.jpg"
                            }
                        }
                    },
                    {
                        "$$hashKey": "object:70",
                        "answer": "Rio Grande do Sul",
                        "type": "LETTERS",
                        "tip": "Estado sul brasileiro",
                        "time": "20:00",
                        "level": "HARD",
                        "files": {
                            "image": {
                                "link": "http://192.168.0.105:7070/uploads/bandeira-rio-grande-do-sul.jpg",
                                "name": "bandeira-rio-grande-do-sul.jpg"
                            }
                        }
                    }]
            }
        };

        return service;

        function get(id) {
            return AuthorizationSvc.getFile(id);
            /*return AuthorizationSvc.searchFolder("EasyEdu", "root")
                .then(function(rootFolder) {
                    return AuthorizationSvc.searchFolder("Cinco sentidos", rootFolder.id);
                })
                .then(function(categoryFolder) {
                    return AuthorizationSvc.searchFile(categoryFolder.id, "Cinco sentidos.json");
                })
                .then(function(categoryJson) {
                    console.log(categoryJson);
                    return AuthorizationSvc.getFile(categoryJson.id)
             });*/
            // return categories[id];
        }

        function add(category) {
            categories[category.id] = category;
        }

        function createQrCodeJson(category) {
            return AuthorizationSvc.createQrCodeJson(category);
        }

    }

    return Service;
});