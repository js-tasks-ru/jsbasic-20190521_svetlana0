/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
 "use strict";
 var str = +prompt("x", '2');
 var t= +prompt("n", '3');
function pow (m, n) {

    function pow(x,n){
        if (n != 1) {
            return x * pow(x, n - 1);
        } else {
            return x;
        }
    };
    console.log (pow (str,t));
}
