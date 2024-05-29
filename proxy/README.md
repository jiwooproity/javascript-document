# Proxy 객체란?

MDN ( mdn web docs ) 에 따르면 Proxy 객체를 사용하면 한 객체에 대한 기본 작업을 가로채고

재정의하는 프록시를 만들 수 있습니다.

## Proxy 객체 생성

두 개의 매개변수를 사용하여 Proxy를 생성합니다.

- target: 프록시할 원본 객체
- handler: 가로채는 작업을 재정의하는 객체

## Proxy 처리기의 기본 동작과 get, set 처리기 재정의

가로채는 작업으로 재정되지 않은 Proxy 객체는 대상에 대한 기본 동작을 보여줍니다.

```
const proxyObject = {
    nickname: "mati"
};

const proxyHandler = {};

const proxy = new Proxy(object, proxyHandler);
console.log(proxy.nickname); // get: "mati"
```

보다시피 nickname 프로퍼티를 get 하였을 때 보여지는 value는 정상적입니다.

하지만, handler로 전달하는 객체의 재정의 방법을 통해 기존 동작을 달리할 수 있습니다.

```
const proxyObject = {
    nickname: "mati"
};

const proxyHandler = {
    get(target, prop, receiver) {
        return `당신의 닉네임은 ${target[prop]}입니다.`;
    }
}

const proxy = new Proxy(proxyObject, proxyHandler);
console.log(proxy.nickname); // get: "당신의 닉네임은 mati입니다."

// 값에 변경이 없었고, get() 처리기에 의해 변경된 메세지를 전달 받습니다.
console.log(proxy); // { nickname: "mati" }
```

value의 변경을 다른 형태로 변경하는 방법도 있습니다.

보통 생각되는 동작은 아래와 동작할 것이지만, set 처리기의 재정의를 통해 다른 형태의 value로 담을 수 있습니다.

또한, 타입 검사와 같은 형태의 로직을 작성하고 에러를 반환하여 컨트롤도 가능합니다.

```
const proxyObject = {
    nickname: "mati"
};

const proxyHandler = {
    set(target, prop, value, receiver) {
        const type = typeof value;

        if(type === "string") {
            return `당신의 닉네임은 ${target[prop]}에서 ${value}로 변경되었습니다.`;
        } else {
            throw new Error("문자열을 입력해 주세요.");
        }
    };
}

const proxy = new Proxy(proxyObject, proxyHandler);

proxy.nickname = 'jiwoo';
console.log(proxy.nickname); // get: "당신의 닉네임은 mati에서 jiwoo로 변경되었습니다."

proxy.nickname = 1; // Error: "문자열을 입력해 주세요."
```

<!-- # No-op 포워딩 프록시

프록시 객체는 모든 작업을 대상 객체에게 전달합니다.

이 전달 작업은 "no-op" 일반 객체에 대해 동작이 이루어지지만, -->
