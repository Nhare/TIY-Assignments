// Functions
var _ = require('lodash');

function clickNavItem(event){
  if (isClosed(this.parentElement)){
     makeEverythingClosed(navItems);
     makeItOpen(this.parentElement);
   } else if (isOpen(this.parentElement)){
     makeItClosed(this.parentElement);
   }
};

_.each(navItems, function(navItem){
  navItem.onclick = clickNavItem;
});

// function hasOpenClass(element){
//   if ( element.className === 'open' ){
//     return true;
//   }
//
//   return false;
// }

function isOpen(element){
  if ( element.className === 'open' ){
    return true;
  }
}

function isClosed(element){
  if ( element.className === '' ){
    return false;
  }
}

function makeItOpen(element){
  element.className = 'open';
}

function makeItClosed(element){
  element.className = '';
}

function makeEverythingClosed(elements){
  _.each(elements, function(element){
    element.parentElement.className = '';
  });
}
