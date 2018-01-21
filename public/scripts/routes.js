app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
   $routeProvider
      // home
      .when('/', {
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
      })

      // JET page
      .when('/jet', {
         templateUrl: '../components/jet.html',
         controller: 'stories'
      })

      // JET FAQ page
      .when('/jet/faq', {
         templateUrl: '../components/jetfaq.html',
         controller: 'stories'
      });

      // Remember routing history
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');
}]);