# Async Await란?

ES8 (ES 2017) 버전에 추가된 비동기 처리 문법이다.

## 비동기 문법이 필요한 이유

기본적으로 자바스크립트는 싱글 스레드 기반의 언어이기 때문에, 한번에 하나의 처리만 가능하다.

따라서 처리하고 있는 작업이 오래 걸리는 작업이라면 다음 작업을 못하게 되는 현상이 발생할 수 있다.

자바스크립트는 코드를 동기적으로 실행한다.

즉, 2초 뒤에 데이터가 전달될 예정인데 해당 함수를 호출하고 다음 호출을 진행하게 될 수 있다.

이렇기에 비동기 처리를 진행하여 데이터를 원활하게 전달받고 다음 작업을 할 수 있도록 처리할 필요가 있다.

( 싱글 스레드에서의 비동기 처리 원리 내용은 Web API를 참고 )

## Async Await 비동기 처리 방법

ES8 버전의 Async Await가 나오기 전에는 Promise를 통해 콜백 지옥을 피하고 비동기 처리를 진행했다.

```
const timeout = (second) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(second > 1) {
                reject("Failed!");
            } else {
                resolve("Done!");
            }
        }, second * 1000);
    })
}

timeout(1).then((res) => {
    console.log(res); // Done!
}).catch((res) => {
    console.log(res); // Failed!
})
```

위 코드처럼 Promise의 인자 Resolve, Reject를 넘겨받아 비동기적으로 데이터를 반환하고,

Promise의 then 메서드로 값을 넘겨받아 처리를 하였다.

이러한 데이터 처리 과정을 Aynsc Await를 활용하여 코드를 작성한다면 기존 동기 코드와 유사하게 작성할 수 있고,

가독성과 가시성을 향상시켜 복잡한 로직을 간결하게 표현하고 흐름을 쉽게 이해할 수 있도록 해 주는 장점이 생긴다.

```
const timeout = (second) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(second > 1) {
                reject("Failed!");
            } else {
                resolve("Done!");
            }
        }, second * 1000);
    });
};

const load = async () => {
    try {
        const message = await timeout(1);
        console.log(message);
    } catch (e) {
        console.log(e);
    }
}

load();
```

Async Await를 통해 load() 라는 비동기 함수를 작성하였다.

처음에 작성하였던 Promise then, catch와 다르게 조금 더 간견할 표현이 가능해졌다.

try catch를 통해 reject 예외처리를 하였고, 정상적으로 완료된 데이터는 message라는 변수에 담아 출력하였다.
