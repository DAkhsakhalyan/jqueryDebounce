# Debounce for jquery
Dobounce limits the rate at which a function can fire.
Passing a callback and delay to $.debounce returns a new function that will execute only once, 
coalescing multiple sequential calls into a single execution

Version 1.0

## Documentation

$.debounce(callback, delay);
callback - 	Required. The function that will be executed
delay - Not required (default is 1000 millisecond). The number of milliseconds to wait before executing the code.

## Code Example

$('input').debounce(funxtion(val) {
  // val - input value
  console.log(val);
}, 2000);

## License
Code released under the <a href="https://github.com/DAkhsakhalyan/jqueryDebounce/blob/master/LICENSE.md">MIT license</a>
