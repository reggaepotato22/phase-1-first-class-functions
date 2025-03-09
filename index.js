function receivesAFunction(callback) {
    callback();  // Call the callback function
}
function returnsANamedFunction() {
    // Define a named function and return it
    function namedFunction() {
        console.log("This is a named function!");
    }
    return namedFunction;
}
function returnsAnAnonymousFunction() {
    // Return an anonymous function directly
    return function() {
        console.log("This is an anonymous function!");
    };
}
module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };
