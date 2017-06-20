angular.module('app')
    .controller('PlayerController', function($scope, $timeout, PlayerService) {
      /* Here is your main controller */
      $scope.post = null;
       $scope.posts = null;

       $scope.loadPosts = function() {

         // Use timeout to simulate a 650ms request.
         return $timeout(function() {

           $scope.posts = [
             { id: 1, name: 'Scooby Doo' },
             { id: 2, name: 'Shaggy Rodgers' },
             { id: 3, name: 'Fred Jones' },
             { id: 4, name: 'Daphne Blake' },
             { id: 5, name: 'Velma Dinkley' }
           ];

         }, 500);
       };
     });
