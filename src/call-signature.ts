// call signature : 함수의 매개변수와 반환값의 타입을 모두 type으로 미리 선언하는 것.
// 타입을 먼저 설정해주고 나서 구현.
type Add = (a:number, b:number) => number
const add:Add = (a,b) => a+b;
