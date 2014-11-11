// product grid js

/*

add onClick event to images flip icon

onClick event should give css transition class

*/

function is1 (){
  return (element.className === 'img1') ? true : false;
}

function is2 (){
  return (element.className === 'img2') ? true : false;
}

function flip1 (){
  element.className = 'img1';
}

function flip2 (){
  element.className = 'img2';
}


// var navItems = document.getElementsByTagName('h3');
//       _.each(navItems, function(navItem){
//         navItem.onclick = clickNavItem;
//       });

// function clickNavItem(event){
//    if (isClosed(this.parentElement)){
//      makeEverythingClosed(navItems);
//      makeItOpen(this.parentElement);
//      //otherwise if this navItem is open
//    } else if (isOpen(this.parentElement)){
//      makeItClosed(this.parentElement);
//    }
// }
