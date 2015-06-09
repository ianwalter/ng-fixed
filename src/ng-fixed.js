/**
 * ng-fixed - v0.2.0 - An AngularJS directive that changes an element's position
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
          'fixedElementSelector': '@fixedElementSelector',
          'fixedClass': '@fixedClass',
          'unfixedElementSelector': '@unfixedElementSelector'
        },
        link: ($scope, element) => {
          var added = false;
          var updateElement = () => {
            var pageYOffset = window.pageYOffset || document.scrollTop,
                clientTop = document.clientTop || 0,
                elementRect = element[0].getBoundingClientRect(),
                fixedElement, fixedElementYOffset,
                unfixedElement, unfixedElementYOffset, elementBottomYOffset;
            var yOffset = pageYOffset - clientTop;

            fixedElement = document.querySelector($scope.fixedElementSelector);

            if (fixedElement) {
              fixedElementYOffset = fixedElement.getBoundingClientRect().top +
                pageYOffset;
            }

            if ($scope.ngFixed !== false &&
                fixedElementYOffset &&
                yOffset >= fixedElementYOffset) {

              if ($scope.unfixedElementSelector) {
                unfixedElement = document.querySelector(
                  $scope.unfixedElementSelector
                );
                if (unfixedElement) {
                  unfixedElementYOffset = unfixedElement
                    .getBoundingClientRect().top + pageYOffset;
                  elementBottomYOffset = elementRect.height + pageYOffset;
                }
              }

              if (unfixedElementYOffset &&
                  unfixedElementYOffset <= elementBottomYOffset) {
                element.css(
                  'top',
                  unfixedElementYOffset - elementRect.height + 'px'
                );
                element.removeClass($scope.fixedClass);
                added = false;
              } else if (!added &&
                         (!unfixedElementYOffset ||
                          unfixedElementYOffset >= elementBottomYOffset)) {
                element.css('top', '');
                element.addClass($scope.fixedClass);
                added = true;
              }
            } else if (added) {
              element.removeClass($scope.fixedClass);
              added = false;
            }
          };

          window.onscroll = updateElement;

          updateElement();
        }
      };
    });
})(window.angular);
