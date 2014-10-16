// Taught my Brian!

var expect = require('chai').expect;

var ralph = { name: 'Ralph', gender: 'm'}
var fabi = {name: 'Fabi', gender: 'f'}
var dave = {name: 'Dave', gender: 'm'}

var pluck = function(collection, property){
  var plucked = [];
  collection.forEach(function(element, index, array){
      plucked.push(element[property]);
  })
  return plucked;
}

var remove = function(collection, callback){
  var removed = [];
  collection.forEach(function(element, index, array){
    if(callback(element) === true){
      removed.push(element);
    }
  });
  return removed;
}

describe ('he pluck function', function (){
    it('should give back an array of strings when the prop plucked is a string', function (){
        var collection = [ ralph, fabi, dave]
        expect(pluck(collection, 'gender')).to.deep.eq(['m', 'f', 'm']);
        expect(pluck(collection, 'name')).to.deep.eq(['Ralph', 'Fabi', 'Dave']);
    });
});

describe('the remove function', function(){
    // it('returns an array of numbers for which a callback function is true', function(){
    //     var collection = [ 1, 2, 3, 4]
    //     var callback = function(n){
    //       return true
    //     expect(remove(collection, callback)).to.deep.eq([1, 2, 3, 4]);
    //     }
    // });
    it('returns the even numbers of an array when the callback is true only for evens', function(){
        var collection = [1, 2, 3, 4]
        var callback = function(n){
          return n % 2 === 0;
        }
        expect(remove(collection, callback)).to.deep.eq([2, 4]);
    });
});

//LODASHHH
/*
var sum = _.reduce([1, 2, 3], function(sum, num) {
  return sum + num;
});
// → 6

var mapped = _.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
  result[key] = num * 3;
  return result;
}, {});
// → { 'a': 3, 'b': 6, 'c': 9 }
*/
