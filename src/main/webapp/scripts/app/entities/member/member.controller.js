'use strict';

angular.module('jhipsterApp')
    .controller('MemberController', function ($scope, Member) {
        $scope.members = [];
        $scope.loadAll = function() {
            Member.query(function(result) {
               $scope.members = result;
            });
        };
        $scope.loadAll();

        $scope.create = function () {
            Member.save($scope.member,
                function () {
                    $scope.loadAll();
                    $('#saveMemberModal').modal('hide');
                    $scope.clear();
                });
        };

        $scope.update = function (id) {
            Member.get({id: id}, function(result) {
                $scope.member = result;
                $('#saveMemberModal').modal('show');
            });
        };

        $scope.delete = function (id) {
            Member.get({id: id}, function(result) {
                $scope.member = result;
                $('#deleteMemberConfirmation').modal('show');
            });
        };

        $scope.confirmDelete = function (id) {
            Member.delete({id: id},
                function () {
                    $scope.loadAll();
                    $('#deleteMemberConfirmation').modal('hide');
                    $scope.clear();
                });
        };

        $scope.clear = function () {
            $scope.member = {name: null, birthDate: null, id: null};
        };
    });
