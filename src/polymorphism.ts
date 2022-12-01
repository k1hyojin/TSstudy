// polymorphism : 다형성. 여러가지 형태들. 
// concrete type : ex) boolean,number, string, void, unknown 등등..
// generic : 타입의 placeholder. concrete type을 정확히 모를 때 사용한다.
// any 와 다른점~!!!!!!!!  -- 타입스크립트의 타입체커로부터 보호를 받지 못한다. 
type SuperPrint = {
    // (arr : number[]) : void
    // (arr : boolean[]) : void
    // (arr : string[]) : void
    // (arr : (number | boolean)[]) : void
    <TypePlaceholder>(arr : TypePlaceholder[]) : void
    // <T>(arr : T[]) : void        ->  <T>로 많이 사용
}
type SuperPrint2 = {
    <TypePlaceholder>(arr : TypePlaceholder[]) : TypePlaceholder    // placeholder 중 하나를 리턴
}
const superPrint : SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

const superPrint2 : SuperPrint2 = (arr) => arr[0];

superPrint([1,2,3,4]);
superPrint([true, false, true]);
superPrint(["a","b","c"])
superPrint([1,2,true,"c"])

const z = superPrint2([1,2,3,4]);
const x = superPrint2([true, false, true]);
const v = superPrint2(["a","b","c"])
const n = superPrint2([1,2,true,"c"])

type SuperPrint3 = { <T,M> (a : T[], b:M) : T}
// type SuperPrint3 =  <T,M> (a : T[], b:M) => T  위와 같음

const superPrint3 : SuperPrint3 = (arr) =>arr[0];

const z2 = superPrint3([1,2,3,4],"ㄹ");
const x2 = superPrint3([true, false, true],1);
const v2 = superPrint3(["a","b","c"],1)
const n2 = superPrint3([1,2,true,"c"],[1,2])

// generic 생성하는 다른 방법! 
function superPrint4<V>(a : V[]){
    return a[0]
}

type Person<E> = {
    name : string,
    extraInfo : E
}
type NicoExtra = { favFood : string}
type NicoPerson = Person<NicoExtra>
// == type NicoPerson = Person<{favFood : string}>


const nico2 : Person<{favFood : string}> = {
    name:"nico",
    extraInfo: {
        favFood : "Kimchi"
    }
}

const lynn2 : Person<null> = {
    name: "lynn",
    extraInfo:null
}

// number[] == Array<number>