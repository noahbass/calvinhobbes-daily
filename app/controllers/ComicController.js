/*
 * ComicController
 *
 * Get the latest comic from calvinbot and allow pagination.
 */
app.controller('ComicController', ['$scope', '$http', function ($scope, $http) {
    function getComic(type, id) {
        $http.get('https://www.reddit.com/user/calvinbot.json?' + type + '=' + id + '&limit=1&count=1').
            success(function (data) {
                data.data.children[0].data.title = data.data.children[0].data.title.replace('&amp;', 'and');

                $scope.comic = data.data.children[0].data;
                $scope.comic.previous = data.data.after;

                if(id == null) {
                    $scope.comic.next = null;
                }
                else {
                    $scope.comic.next = data.data.after;
                }
            }).
            error(function () {
                $scope.error = true;
            });
    }

    // load initial comic
    getComic(null, null);

    // get previous comic
    $scope.previous = function (id) {
        getComic('after', id);
    };

    // get next comic
    $scope.next = function (id) {
        getComic('before', id);
    };
}]);
