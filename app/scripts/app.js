'use strict';

/**
 * @ngdoc overview
 * @name angularTableApp
 * @description
 * # angularTableApp
 *
 * Main module of the application.
 */
angular
  .module('angularTableApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'views/partial-home.html'
    })
    .state('about', {
        // we'll get to this in a bit       
    });
  });
