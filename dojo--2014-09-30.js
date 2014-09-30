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
 
 test_subtract("one", "zero", 1);
 test_subtract("one", "one", 0);
 test_subtract("two", "zero", 2);
 test_subtract("two", "one", 1);
 test_subtract("two", "two", 0);
 test_subtract("three", "zero", 3);
 test_subtract("three", "one", 2);
 test_subtract("three", "two", 1);
 test_subtract("three", "three", 0);
 test_subtract("four", "zero", 4); 
 test_subtract("four", "one", 3);
 test_subtract("four", "two", 2);
 test_subtract("four", "three", 1);
 test_subtract("four", "four", 0);
test_subtract("five", "zero", 5);
test_subtract("five", "one", 4);
test_subtract("five", "two", 3);
test_subtract("five", "three", 2);
test_subtract("five", "four", 1);
test_subtract("five", "five", 0);
test_subtract("six", "zero", 6);
test_subtract("six", "one", 5);
test_subtract("six", "two", 4);
test_subtract("six", "three", 3);
test_subtract("six", "four", 2);
test_subtract("six", "five", 1);
test_subtract("six", "six", 0);
test_subtract("seven", "zero", 7);
test_subtract("seven", "one", 6);
test_subtract("seven", "two", 5);
test_subtract("seven", "three", 4);
test_subtract("seven", "four", 3);
test_subtract("seven", "five", 2);
test_subtract("seven", "six", 1);
test_subtract("seven", "seven", 0);
 test_subtract("eight", "zero", 8);
 test_subtract("eight", "one", 7);
 test_subtract("eight", "two", 6);
 test_subtract("eight", "three", 5);
 test_subtract("eight", "four", 4);
 test_subtract("eight", "five", 3);
 test_subtract("eight", "six", 2);
 test_subtract("eight", "seven", 1);
 test_subtract("eight", "eight", 0);
 
 test_subtract("nine", "zero", 9);
 test_subtract("nine", "one", 8);
 test_subtract("nine", "two", 7);
 test_subtract("nine", "three", 6);
 test_subtract("nine", "four", 5);
 test_subtract("nine", "five", 4);
 test_subtract("nine", "six", 3);
 test_subtract("nine", "seven", 2);
 test_subtract("nine", "eight", 1);
 test_subtract("nine", "nine", 0);

 test_subtract("ten", "zero", 10);
 test_subtract("ten", "one", 9);
 test_subtract("ten", "two", 8);
 test_subtract("ten", "three", 7);
 test_subtract("ten", "four", 6);
 test_subtract("ten", "five", 5);
 test_subtract("ten", "six", 4);
 test_subtract("ten", "seven", 3);
 test_subtract("ten", "eight", 2);
 test_subtract("ten", "nine", 1);
 test_subtract("ten", "ten", 0);