/**
 * Created by Aldo on 13/04/18.
 */
app
    .filter('capitalize', function () {
        return function (input) {
            return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
        };
    })
    .filter('toTime', function ($filter) {
        return function (item) {
            var date = new Date(new Date().toDateString() + ' ' + item);
            return $filter('date')(date, 'h:mm a');
        };
    });
