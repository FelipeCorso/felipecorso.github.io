define([], function () {
    'use strict';
    Component.$inject = [];
    /*@ngInject*/
    function Component() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var current = element;
                scope.$watch("attrs.embedSrc", function () {
                    updateSrc(attrs.embedSrc);
                });

                scope.$on('$destroy', function () {
                    updateSrc("");
                });

                function updateSrc(src) {
                    var clone = element
                        .clone()
                        .attr('src', src);
                    current.replaceWith(clone);
                    current = clone;
                }
            }
        }
    }

    return Component;
});