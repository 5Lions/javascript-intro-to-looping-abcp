/*
  0 passing (499ms)
  3 failing

  1) loops forLoop(array) adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times:
     ReferenceError: forLoop is not defined
      at Context.it (test/loops-test.js:32:28) */

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
   if (i === 1) {
   return `"I am ${i} strange loop ${i === 0
  }
} 


/*
  2) loops whileLoop(n) counts down from n to 0:
     ReferenceError: whileLoop is not defined
      at Context.it (test/loops-test.js:50:7) */


/*
  3) loops doWhileLoop(array) removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false`:
     ReferenceError: doWhileLoop is not defined
      at Context.it (test/loops-test.js:62:24) */

