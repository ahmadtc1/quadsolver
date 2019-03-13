module.exports = function quadsolver(a, b, c) {

    let discriminant = (Math.pow(b, 2)) - (4 * a * c)
    let plusRoot = (( -1 * b ) + Math.sqrt(discriminant) ) / ( 2 * a );
    let minusRoot =  (( -1 * b ) - Math.sqrt(discriminant) ) / ( 2 * a );

    if (discriminant < 0) {
        console.log("There are no real roots");
    }

    else if (discriminant == 0) {
        console.log(
            `There is one root
            and the root is ${plusRoot}`
            );
    }

    else {
        console.log(
            `There are two distinct roots
            and the roots are ${minusRoot} and ${plusRoot}`
            );
    }
};