'use strict';

angular.module('githubpage', ['restangular']);
  .constant('API', {
    base: 'https://api.github.com'
  })
  .controller('MainCtrl', function(Restangular){
    Restangular
      .setBaseUrl(API.base);

    // var self = this;
    //
    // this.user = { };
    //
    // Restangular.one('user', 'al-the-x').get().then(function(data){
    //   self.user = data;
    // });
    this.user = Restangular.one(
      'users', 'al-the-x'
    ).get().$object;

  });
