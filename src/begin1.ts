type Age = number;
type Name = string;
type Player = {     // Alias(변수) 재사용성을 위해. 똑같은 타입을 여러번 쓰기 번거로울 때 type 변수를 설정해준다. 첫 글자는 대문자
    name :Name,
    age ?: Age
}
// age : number    // age : number 를 필수요소로 지 않으려면 age ?: number 처럼 물음표 넣어주면 된다.
// if(player.age && player.age < 10){ } // player.age가 undefined 일수도 있기에 player.age 가 존재하는지 여부판단 , 10 이하인지 판단

const nico : Player = {
    name : "nico"
}
const lynn : Player =  {
    name : "lynn",
    age : 12
}

// ------------------------------------------------------
// argument의 타입지정
function playerMaker(name:string) : Player{  // (속성값 : 타입값) = argument의 타입지정.  object 반환 . Player(return 값) 타입 지정
    return {
        name // == name : name
    }
}

const hyojin = playerMaker("nico");
hyojin.age = 24;

// ------------------------------------------------------
//화살표 함수에서의 타입지정
const playerMaker2 = (name:string) :Player => ({name})