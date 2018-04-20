// Fn = Fn-1 + Fn-2.


function Fib(n) {
	var fibo = [];
  var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
    fibo.push(c);
  }
  return fibo;
}

console.log (Fib(10));
