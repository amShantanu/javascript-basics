function x(){
    var a = 10;
    function y(){
        console.log(a);
    }
}
let d = x();
console.log(d);
x();
