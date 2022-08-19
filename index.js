// const { returns } = require("chai-spies");

function receivesAFunction(callbackFunction) {
    callbackFunction();
    
}
function callbackFunction() {
    return function namedFunction() {

    };
}



function returnsANamedFunction() {
    return function functionNamed() {

    };
}



function returnsAnAnonymousFunction() {
    return function() {};
}
