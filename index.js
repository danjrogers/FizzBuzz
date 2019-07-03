// FizzBuzz
// Ititerage through 1 to 101
// log each number in the console

var finishNumber  = 101;
var fizz          = " Fizz";
var buzz          = " Buzz";
var fizzbuzz      = " FizzBuzz";

for (var i = 0; i <= finishNumber; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + fizz);
  } else if (i % 3 === 0) {
    console.log(i + buzz);
  } else if (i % 5 === 0) {
    console.log(i + fizzbuzz);
  }
}
