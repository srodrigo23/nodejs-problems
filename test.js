function fib (num, p, u){
    if(num == 1) return p;
    else if(num == 2) return u;
    else return fib(num-2, p, u) + fib(num-1, p, u)
}
console.log(fib(5, 'R', 'A'))