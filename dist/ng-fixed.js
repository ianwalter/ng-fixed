/**
 * ng-fixed - v0.0.1 - An AngularJS directive that changes an element's position
 * to fixed when scrolled to a given point
 *
 * @author Ian Kennington Walter <ianwatler@fastmail.com>
 */
'use strict';

(function (angular) {
  'use strict';

  angular.module('ng-fixed', []).directive('ngFixed', function () {
    return {
      restrict: 'A',
      scope: {
        'ngFixed': '&ngFixed',
        'fixedPoint': '@fixedPoint',
        'fixedClass': '@fixedClass'
      },
      link: function link($scope, element) {
        var added = false;
        var updateElement = function updateElement() {
          var yOffset = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
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