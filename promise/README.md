# Promise란?

Promise ( 프로미스 ) 는 자바스크립트 비동기 처리에 사용되는 객체입니다.

## Promise의 사용 이유

자바스크립트의 비동기는 기본적으로 비동기로 처리되는 코드가 먼저 실행되고, 비동기로 실행된 코드는 기다리지 않으며 다음 코드를 바로 실행하게 됩니다.

이에 따라, 비동기 처리 함수의 데이터를 정상적으로 받아 처리하기 위해, 콜백 함수를 만들어 데이터가 준비되면 순차적으로 실행되게끔 하였습니다.

이러한 콜백 함수 처리는 일명 콜백 지옥 ( Callback Hell ) 이라 불리는 문제를 낳았습니다.

이 문제를 해결하기 위해 도입된 방법 중 하나가 Promise 객체입니다.

## new Promise()

기본적인 Promise 객체는 new 생성자를 통해 Promise 객체를 생성하고, 콜백 함수의 인자로 resolve, reject를 전달 받습니다.

여기서 프로미스 상태 ( Promise states ) 상태에 따른 처리 과정이 주어집니다.

Promise는 3가지의 상태를 나타내게 됩니다.

- Pending ( 대기 ) : 비동기 처리가 아직 완료되지 않은 경우
- Fulfilled ( 이행 ) : 비동기 처리가 완료되어 결과 값을 반환한 상태
- Rejected ( 실패 ) : 비동기 처리 중 오류가 발생하거나 실패한 상태

resolve는 정상적으로 처리가 완료된 상태를 반환하게 되고,
reject는 처리 중에 문제가 발생하였을 때 실패를 반환하게 됩니다.

```
const getMessage = (msg) => {
    new Promise((resolve, reject) => {
        resolve(msg); // fulfilled
        reject(msg); // rejected
    });
};

// resolve로 fulfilled 처리
getMessage("Hello").then((result) => {
    console.log(result); // result : "Hello"
});

// reject로 rejected 처리
getMessage("Hello).then((result) => {
    console.log(result); // 실행되지 않음
}).then((result) => {
    console.log(result);
})
```

## Promise 예제

```
const timer = (second) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(second > 1) {
                resolve("Success");
            } else {
                reject(new Error("Failed"));
            }
        }, second * 1000);
    });
};

timer(3).then((result) => {
    console.log(result); // Success
});

timer(1).then().catch((result) => {
    console.log(result); // Failed
});
```

## Promise.all()

Promise.all 메서드는 프로미스 객체로 담겨 있는 배열을 인자로 받습니다.

인자로 전달받은 프로미스들은 병렬적으로 처리하고 처리된 결과값을 배열에 담아 반환합니다.

처리가 완료되는 시점은 가장 처리가 오래 걸리는 프로미스 객체를 기준으로 완료됩니다.

이러한 특성을 가진 메서드는 다른 프로미스의 결과값을 의존하지 않는 경우, 효율적으로 사용이 가능합니다.

## Promise.race()

Promise.race 메서드는 네이밍 그대로 레이스하는 것입니다.

Promise.all 메서드와 같이 프로미스 객체를 담은 배열을 인자로 받습니다.

여기까지는 동일하지만, Promise.race 메서드는 가장 먼저 처리된 프로미스 객체의 반환 값을 반환합니다.

## Promise.allSettled()

Promise.allSettled 메서드는 성공과 실패에 대한 경우를 신경쓰지 않습니다.

프로미스 객체들을 담은 배열을 인자로 전달받아, 그대로 처리를 진행하고 그 상태 그대로 반화을 진행합니다.

예를 들어서 성공 2, 실패 1의 프로미스 반환을 가지게 되는 로직이라면

결과 값은 아래와 같이 반환받게 됩니다.

반환 값에 다른 점은 성공 ( filfilled ) 인 경우, value 결과 값을 반환하고, 반대로 실패 ( rejected ) 인 경우엔 reason 프로퍼티를 반환합니다.

```
[
    { status: "fulfilled", value: "Success" },
    { status: "rejected", reason: "Failed" }
]
```
