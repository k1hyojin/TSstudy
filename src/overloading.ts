//overloading 이란 ? 함수가 여러개의 call signature를 가지고 있는 함수  

// type Add2 = {
//     (a:number, b:number) : number
//     (a:number, b:string) : number
// } 
// const add2:Add2 = (a,b) => {
//     if(typeof b === "string" ) return a+b;
// }
type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string): void
    (config: Config): void
}

// 패키지나 라이브러리에서 흔히 볼 수 있음
const push: Push = (config) => {
    if (typeof config === "string") {
        console.log(config);
    } else {
        console.log(config.path, config.state);
    }
}

// 서로 다른 여러개의 파라미터를 가질 때 
type Add3 = {
    (a: number, b: number): number
    (a: number, b: number, c: number): number
}

const add3: Add3 = (a, b, c?: number) => {
    if(c) return a + b + c
    return a + b;
}