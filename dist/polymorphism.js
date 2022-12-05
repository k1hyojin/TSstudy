"use strict";
const superPrint = (arr) => {
    arr.forEach(i => console.log(i));
};
const superPrint2 = (arr) => arr[0];
superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);
superPrint([1, 2, true, "c"]);
const z = superPrint2([1, 2, 3, 4]);
const x = superPrint2([true, false, true]);
const v = superPrint2(["a", "b", "c"]);
const n = superPrint2([1, 2, true, "c"]);
// type SuperPrint3 =  <T,M> (a : T[], b:M) => T  위와 같음
const superPrint3 = (arr) => arr[0];
const z2 = superPrint3([1, 2, 3, 4], "ㄹ");
const x2 = superPrint3([true, false, true], 1);
const v2 = superPrint3(["a", "b", "c"], 1);
const n2 = superPrint3([1, 2, true, "c"], [1, 2]);
// generic 생성하는 다른 방법! 
function superPrint4(a) {
    return a[0];
}
// == type NicoPerson = Person<{favFood : string}>
const nico2 = {
    name: "nico",
    extraInfo: {
        favFood: "Kimchi"
    }
};
const lynn2 = {
    name: "lynn",
    extraInfo: null
};
// number[] == Array<number>
