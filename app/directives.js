/**
 * Created by pacifi on 11/24/17.
 */

app.directive('disableOnClick', disableOnClick);

function disableOnClick() {
    var directive = {
        restrict: 'A',
        link: linkFunc
    };
    return directive;

    function linkFunc(scope, element, attrs, ngModelCtrl) {
        element.on('click', function (event) {
            event.target.disabled = true;

        });
    }
}
