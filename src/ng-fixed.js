/**
 * ng-fixed - v0.0.1 - An AngularJS directive that changes an element's position
 * to fixed when scrolled to a given point
 *
 * @author Ian Kennington Walter <ianwatler@fastmail.com>
 */
((angular) => {
  'use strict';

  angular
    .module('ng-fixed', [])
    .directive('ngFixed', () => {
      return {
        restrict: 'A',
        scope: {
          'ngFixed': '&ngFixed',
          'fixedPoint': '@fixedPoint',
          'fixedClass': '@fixedClass'
        },
        link: ($scope, element) => {
          var added = false;
          var updateElement = () => {
            var yOffset = (window.pageYOffset || document.scrollTop) -
              (document.clientTop || 0);
            if ($scope.ngFixed !== false && yOffset >= $scope.fixedPoint) {
              element.addClass($scope.fixedClass);
              added = true;
            } else if (added) {
              element.removeClass($scope.fixedClass);
            }
          };

          window.onscroll = updateElement;

          updateElement();
        }
      };
    });
})(window.angular);
