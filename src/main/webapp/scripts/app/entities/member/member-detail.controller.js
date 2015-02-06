'use strict';

angular.module('jhipsterApp')
    .controller('MemberDetailController', function ($scope, $stateParams, Member) {
        $scope.member = {};
        $scope.load = function (id) {
            Member.get({id: id}, function(result) {
              $scope.member = result;
            });
        };
        $scope.load($stateParams.id);
    });
