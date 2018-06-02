var app=angular.module("myapp",["ngRoute"]);
app.controller('mycontroller',function($scope,$http){

			//replace your api url with https://bitbns.com/order/getTickerAll
                var url = "https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=29386b8f344483a80f9f2f51f8dc1761&group_id=80641914%40N00&per_page=20&page=1&format=json&nojsoncallback=1";
                $http.get(url)
                    .then(function(data, status, headers, config) {
                        $scope.photos = data;
                        // $scope.statcode = status;
                    });


});

app.controller('photo',function($scope){
$scope.name="sanket naik";
});

app.config(function($routeProvider) {
    $routeProvider
    // .when("/", {
    //     templateUrl : "index.html",
    //     controller:"indexcontroller"
    // })
    .when("/abcd", {
        templateUrl : "photo.html",
        controller : "photo"
    });

   
});


//  https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=004ac4e3901e843d6ba9b61edb62312d&tags=anime&format=json&nojsoncallback=1&api_sig=bc25dffd0f7d9999fe5705373f644cc7
//  Key:
// 29386b8f344483a80f9f2f51f8dc1761

// Secret:
// f4d4ac1edf27afef
// working api 
// https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=29386b8f344483a80f9f2f51f8dc1761&group_id=80641914%40N00&per_page=20&page=1&format=json&nojsoncallback=1