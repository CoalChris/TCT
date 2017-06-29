app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
   $routeProvider
      // home
      .when('/', {
         templateUrl: '../components/home.html',
         controller: 'stories'
      })
      .when('/home', {
         templateUrl: '../components/home.html',
         controller: 'stories'
      })

      // posts
      .when('/posts', {
         templateUrl: '../components/posts.html',
         controller: 'stories'
      })

      // specific post
      .when('/posts/:id', {
         templateUrl: '../components/post.html',
         controller: 'stories'
      });

      // Remember routing history
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');
}]);