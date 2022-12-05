"use strict";
//overloading 이란 ? 함수가 여러개의 call signature를 가지고 있는 함수  
// 패키지나 라이브러리에서 흔히 볼 수 있음
const push = (config) => {
    if (typeof config === "string") {
        console.log(config);
    }
    else {
        console.log(config.path, config.state);
    }
};
const add3 = (a, b, c) => {
    if (c)
        return a + b + c;
    return a + b;
};
