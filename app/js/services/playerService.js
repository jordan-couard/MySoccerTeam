angular.module('app')
    .service('PlayerService', function($http) {
        return {
            loadPosts: function() {
                return $http.get('/posts');
            },
            // getOne: function(id) {
            //     return $http.get('/users/' + id);
            // },
            // update: function(id, user) {
            //     return $http.put('/users/' + id, user);
            // },
            // delete: function(id) {
            //     return $http.delete('/users/' + id);
            // }
        };
    });
