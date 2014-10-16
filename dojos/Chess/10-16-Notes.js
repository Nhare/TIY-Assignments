// Taught my Brian!

var expect = require('chai').expect;

var ralph = { name: "Ralph", gender: 'm'}
var fabi = {name: "Fabi", gender: 'f'}
var dave = {name: 'Dave', gender: 'm'}

var pluck = function(collection, property){
  collection.forEach(function(element, index, array){
    return element[property]
  })
}

describe ('he pluck function', function (){
    it('should give back an array of strings when the prop
    plucked is a string', function (){
        var collection = [ ralph, fabi, dave]
        expect(pluck(collection, 'gender')).to.eq(['m', 'f', 'm']);
    });
});
