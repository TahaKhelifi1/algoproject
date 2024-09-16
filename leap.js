/*function LeapYear():
var 
    year = integer;
    test = boolean;
begin 
    test = true ;
        if (year % 100 )&&(year %4):
            tes <= true ;
        else if ( year % 100 ):
            test <= flase ;
         else : 
            test <= false 
    end if 
        if test = true :
             write(" it's a leap year);
        else 
            write (it's not a leap year)
    end if 
end */
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;    // Divisible by 400, so it's a leap year
    } else if (year % 100 === 0) {
        return false;   // Divisible by 100 but not by 400, so not a leap year
    } else if (year % 4 === 0) {
        return true;    // Divisible by 4 but not by 100, so it's a leap year
    } else {
        return false;   // Not divisible by 4, so not a leap year
    }
}

function testLeapYear() {
    var year = 2000;
    if (isLeapYear(year)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

/* partie 2 */ 
function ticket (){
    var age= prompt('Enter your age');
    var price ;
    if (age <= 12){
        price = $10;
    } else if (12< age <= 17){
        price = $15;
    } else {
        price = $20;
    }
    console.log('The ticket price is ' + price + ' euros');
}
/* partie 3 */
function palindrome(str) {
    function isPalindromeRecursive(s, start, end) {
        if (start >= end) {
            return true;
        }
        if (s[start] !== s[end]) {
            return false;
        }
        return isPalindromeRecursive(s, start + 1, end - 1);
    }
    return isPalindromeRecursive(str, 0, str.length - 1);
}

// partie 4
function power() {
    var base = prompt('Enter the base');
    var exponent = prompt('Enter the exponent');

    function powerRecursive(base, exponent) {
        if (exponent === 0) {
            return 1;
        }
        return base * powerRecursive(base, exponent - 1);
    }

    var result = powerRecursive(base, exponent);
    console.log('The result is ' + result);
}

