// 타입스크립트와 객체지향 프로그램이 가진 장점 : 추상클래스 (abstract class)이다.
// 추상클래스란? 다른 클래스가 상속받을 수 있는 클래스. 상속 받을 수만 있고 직접적으로 인스턴스를 만들 수는 없다.그래서 new User 는 불가능함!!
// 추상메소드란? 추상클래스를 상속받는 클래스가 무조건 구현을 해야하는 메소드. 

abstract class User{
    constructor(
        private firstName : string,
        private lastName : string,
        protected nickName : string
        // private : 인스턴스 밖, 다른 자식클래스에서도 접근 불가
        // protected : 인스턴스 밖에서는 접근 불가능이지만 자식클래스에서는 접근 가능
    ){}
    abstract getNickName() : void   //추상메소드. 메소드의 call signature. argument를 받으면 argument의 이름과 타입, 함수의 리턴타입을 정의.'abstract'가 붙으면 상속받는 클래스에서 무조건 구현해줘야함.
    public getFullName(){   // public, private, protected 가능
        return `${this.firstName} ${this.lastName}` // implementation 
    }
}

class Player3 extends User {    // 추상클래스에 private property를 설정했다면 클래스를 상속했을지라도 property에 접근할 수 없다.
    // constructor(     -> abstract class로 이동
    //     private firstName : string,
    //     private lastName : string,
    //     public nickName : string
    // ){}
    getNickName(): void {
        this.getFullName();
        console.log(this.nickName)
    }

}

const nico3 = new Player3("nico" , "las" , "니꼬");

nico3.getFullName();    // User 클래스를 상속받았기 때문에 사용가능.


// ------------------------------------------------------

type Words = {
    [ whatever : string] : string // Words type이 string만을 속성으로 가지는 오브젝트라는 뜻. 제한된 양의 property || key를 갖는 타입을 정의해주는 방법
}


class Dict {
    private words : Words
    constructor(){
        this.words = {} // 수동으로 초기화
    }
    add(word : Word){   // 클래스를 타입처럼 사용
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }
    }
    def(term:string){
        return this.words[term]
    }
}

class Word {
    constructor(
        public term : string,
        public def : string
    ){}
}

const kimchi = new Word("kimchi" , "한국의 음식")
const kimbap = new Word("kimbap","김밥은 맛있다")

const dict = new Dict();

dict.add(kimchi);
dict.add(kimbap);

dict.def("kimchi");
dict.def("kimbap");