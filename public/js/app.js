/**
 * Example application for ng-fixed (https://github.com/ianwalter/ng-fixed)
 *
 * @author Ian Kennington Walter <ianwalter@fastmail.com>
 */
requirejs.config({
  baseUrl: '.',
  paths: {
    'angular': [
      '//ajax.googleapis.com/ajax/libs/angularjs/1.2.4/angular.min',
      'public/lib/angular/angular'
    ],
    'ng-fixed': [
      'dist/ng-fixed'
    ]
  },
  shim: {
    'angular' : { exports: 'angular' },
    'ng-fixed': { deps: ['angular'] }
  }
});

require(['angular', 'ng-fixed'], function(angular) {
  'use strict';

  angular
    .module('menu-demo', ['ng-fixed'])
    .controller('HomeController', function() { });

  angular.bootstrap(document , ['menu-demo']);
});