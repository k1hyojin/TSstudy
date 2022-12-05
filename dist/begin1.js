"use strict";
// age : number    // age : number 를 필수요소로 지 않으려면 age ?: number 처럼 물음표 넣어주면 된다.
// if(player.age && player.age < 10){ } // player.age가 undefined 일수도 있기에 player.age 가 존재하는지 여부판단 , 10 이하인지 판단
const nico = {
    name: "nico"
};
const lynn = {
    name: "lynn",
    age: 12
};
// ------------------------------------------------------
// argument의 타입지정
function playerMaker(name) {
    return {
        name // == name : name
    };
}
const hyojin = playerMaker("nico");
hyojin.age = 24;
// ------------------------------------------------------
//화살표 함수에서의 타입지정
const playerMaker2 = (name) => ({ name });
