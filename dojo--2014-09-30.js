/**
 * String Calculator
 *
 * Given two strings that represent numbers in English -- "one", "two", "three" -- 
 * calculate the addition, subtraction, multiplication, and division of those numbers
 * and return that value as a `Number`. For example:
 *
 * add("one", "one") === 2
 *
 * For complete credit, provide test coverage for all numbers "zero" through "ten"
 * for at least _two_ operations, but keep in mind that the assignment is designed
 * to enforce _practice_ not _completeness_. Follow "red-green-refactor", use
 * ping-pong pairing, and commit often using `@username & @username` as the
 * commit message.
 */
 
 function wordVal (word){
    if(word == "zero"){
         word = 0;
    }
    if ( word == "one"){
        word = 1;
    } 
    if (word == "two"){
        word = 2;
    }
    if(word == "three"){
        word = 3;
    }
    if (word == "four"){
        word = 4;
    }
    if (word == "five"){
        word = 5;
    }
    if (word == "six"){
        word = 6;
    }
    if (word == "seven"){
        word = 7;
    }
    if (word == "eight"){
        word = 8;
    }
    if (word == "nine"){
        word = 9;
    }
    if (word == "ten"){
        word = 10;
    }
    return word;
}

function test_wordVal(a, b){
    console.log('it should convert "' + a + '" to ' + b + ': ',
        wordVal(a) === b);
}

test_wordVal('zero', 0);
test_wordVal('one', 1);
test_wordVal('two', 2);
test_wordVal('three', 3);
test_wordVal('four', 4);
test_wordVal('five', 5);
test_wordVal('six', 6);
test_wordVal('seven',7);
test_wordVal('eight',8);
test_wordVal('nine',9);
test_wordVal('ten',10);

function subtract(a,b){
     
    a = wordVal(a);
    
    b = wordVal(b);
    
    return a - b;
    
}
 
function test_subtract(a, b, c){
     console.log('it should subtract ' + a + ' and ' + b + ':',
     subtract(a,b) === c);
}
 
 test_subtract("one", "one", 0);
 test_subtract("two ", "one", 1);
 test_subtract("two", "two", 0);
 test_subtract("three", "one", 2);
 test_subtract("three", "two", 1);
 test_subtract("three", "three", 0);