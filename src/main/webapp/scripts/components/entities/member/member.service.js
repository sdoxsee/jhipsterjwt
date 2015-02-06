'use strict';

angular.module('jhipsterApp')
    .factory('Member', function ($resource) {
        return $resource('api/members/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    var birthDateFrom = data.birthDate.split("-");
                    data.birthDate = new Date(new Date(birthDateFrom[0], birthDateFrom[1] - 1, birthDateFrom[2]));
                    return data;
                }
            }
        });
    });
