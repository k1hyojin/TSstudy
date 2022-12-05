"use strict";
const playerMaker3 = (name) => ({ name });
const nico1 = playerMaker("nico");
nico.age = 12;
// nico.name = "las"
const numbers = [1, 2, 3, 4]; // readonly 로 불변성을 갖는다.
// numbers.push(1) => push 는 오류. filter, map은 배열을 바꾸지 않기때문에 사용가능
// ------------------------------------------------------
// Tuple : 최소한의 길이를 갖고 특정 위치에 특정 타입이 있어야하는 배열을 생성한다.
const player = ["nico", 1, true]; // 실제 환경에 push 하기 전 오류를 확인할 수 있다. 
// player[0] = "igigi";
// ------------------------------------------------------
let a = undefined; // 선택적 타입일 때 undefined 결과를 얻을 수 있다.
let b = null;
// ------------------------------------------------------
//any : typescript의 보호장치를 비활성화 시킨다. 아무 타입이나 될 수 있다.
// 만약 any를 사용하게 되면 자바스크립트 환경과 같아지기 때문에 사용하지 않는걸 추천한다.
let c;
// ------------------------------------------------------
// unknown : 어떤 타입인지 모르는 변수에 적용. ex) API로부터의 응답 파일 형식이 어떤건지 모를때
// 함수 실행시 변수의 타입을 먼저 확인해야하는 방식의 보호장치
let d;
if (typeof d === 'number') {
    let e = d + 1;
}
if (typeof d === "string") {
    let e = d.toUpperCase();
}
// ------------------------------------------------------
// void : 아무것도 return 하지 않을때 발생. 자동으로 인식해서 적용해줄 필요없음 
function hello() {
    console.log('x');
}
const abc = hello();
// abc.toUpperCase(); => void 는 비어있는 것을 일컫음. void 에 toUpperCase 존재하지 않음
// ------------------------------------------------------
// never : 1. 함수가 절대 return 하지 않을 때 
//         2. return 하지않고 오류 발생할 때
//         3. 타입이 두가지 이상일 수도 있을 때
function bye(name) {
    // return "xxx"; => return 하지 않아야 하므로 error 발생
    throw new Error("xxx"); // 2번
}
function bye2(name) {
    if (typeof name === "string") {
        name; // string
    }
    else if (typeof name === "number") {
        name; // number
    }
    else { // 이 코드는 절대 실행되지 않아야 함을 의미한다.
        name; // never
    }
}
