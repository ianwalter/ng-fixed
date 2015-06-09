/**
 * ng-fixed - v0.0.1 -
 *
 * @author Ian Kennington Walter (http://iankwalter.com)
 */
(function(angular) {
  'use strict';

  angular
    .module('ng-fixed', [])
    .directive('ngFixed', function() {
      return {
        restrict: 'A',
        scope: {
          'ngFixed': '&ngFixed',
          'fixedPoint': '&fixedPoint',
          'fixedClass': '&fixedClass'
        },
        link: function($scope, element) {
          var docTop = (window.pageYOffset || doc.scrollTop) -
            (doc.clientTop || 0);
          element.addClass($scope.fixedClass);
        }
      };
    });
})(window.angular);
