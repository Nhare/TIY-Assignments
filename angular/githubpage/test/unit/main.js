'use strict';

describe('controllers', function(){
  beforeEach(module('githubpage'));


    beforeEach(inject(function($httpBackend){

        $httpBackend.expectGET('https://api.github.com/users/al-the-x');

        var MainCtr = $controller('MainCtrl');

        assert.deepEqual(MainCtrl.user, {});

        $httpBackend.flush();

        assert.equal(MainCtrl.user.login, 'al-the-x');
    // });
  }));
});
