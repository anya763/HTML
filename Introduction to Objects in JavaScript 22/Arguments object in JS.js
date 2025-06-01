function findmax() {
    var max = 0
    for (var i = 0; i < arguments.length; i++)
        if (arguments[i] > max){
    max = arguments[i];
        }
        return max;
}
console.log(findmax(3, 6, 76, 45, 23, 76, 123));