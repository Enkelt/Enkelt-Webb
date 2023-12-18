/***********************************************************
* Developer: Edvard Busck-Nielsen (@buscedv)       *
* Website: https://enkelt.edvard.dev         *
* License: MIT License                                     *
***********************************************************/

let siteHeaderText = {};

let downGit = angular.module('downGit', [
    'ngRoute',
    'homeModule',
    'toastr',
]);

downGit.config([
    '$routeProvider',
    
    function($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/home',
            })
            .otherwise({
                redirectTo: '/home',
            });
    }
]);

downGit.config([
    'toastrConfig',
    
    function(toastrConfig) {
        angular.extend(toastrConfig, {
            positionClass: 'toast-bottom-right',
            maxOpened: 3,
        });
    }
]);
