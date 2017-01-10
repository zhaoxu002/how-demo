(function () {
  angular.module('app', ['ionic'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          views: {
            'home': {
              templateUrl: 'home.html',
              controller: 'mainCtrl'
            }
          }
        });
      $urlRouterProvider.otherwise('/home');
    })
    .controller('mainCtrl', function ($scope) {
      console.log('妈妈我再也不拖延了');
    })
})();
