// write a program called fizzBuzz that console.logs numbers from 1 to 100
// For multiples of three print 'fizz,' for multiples of five print 'buzz,' and for multiples of both three and five print 'fizzbuzz.' Otherwise, do nothing.
function fizzBuzz() {
  for (var i = 1; i < 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
