function fizzBuzz(){
	for (var i = 1; i <= 100; i++) {
    if (i % 15  == 0) {//If number is multiple of 3 & 5, then print FizzBuzz
      console.log('FizzBuzz');
    }
    else if (i % 3 == 0) {
      console.log('Fizz');
    }
    else if (i % 5 == 0) {
      console.log('Buzz');
    }
    else {
      console.log(i);//if number does not satisfy any of the above, print the number
    }
  }
}