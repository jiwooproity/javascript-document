# JavaScript의 this 바인딩

바인딩이란 선언된 실제 값 또는 프로퍼티를 연결하고 결정 짓는 행위를 말한다.

자바스크립트에서의 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.

따라서, 기본 바인딩, 명시적 바인딩, 암시적 바인딩, new 바인딩과 같은 4가지 규칙을 잘 이해하고 가야한다.

## 기본 바인딩

기본 바인딩은 위에 나머지 3가지의 바인딩 규칙이 모두 적용되지 않는 경우 발생한다.

```
const object = {
  job: "developer",
  getJob: function() {
    return this.job;
  };
};

const object2 = {
  job: "no-developer",
  getJob: object.getJob
};

const result object2.getJob();

console.log(result); // no-developer
```

기본 바인딩의 경우, 함수를 호출한 오브젝트에 의해 동적으로 결정됩니다.

분명 출처는 object의 메서드지만, object2 에서 메서드를 호출함으로서 this.job이 값이 "no-developer"로 변경된 것을 알 수 있습니다.

최상위 스코프에서 호출한 경우엔 Window 객체로 호출된 것과 같이 Window 객체가 바인딩된 것을 확인할 수 있습니다.

( Browser: Window, Node: {} )

원하는 객체를 바인딩하기 위해서 bind, apply, call 메서드를 통해 명시적 바인딩을 할 수 있습니다.

## 명시적 바인딩

명시적 바인딩은 function의 prototype bind, call, apply 메서드를 활용하여 this의 바인딩을 명시하는 행위를 말합니다.

bind의 첫 번째 인자로 오브젝트를 명시하여 this 바인딩을 명시할 수 있습니다.

```
const object = {
  name: "jiwoo",
  getName: function() {
    return this.name;
  }
}

const object2 = {
  name: "minsu",
  getName: object.getName;
}

const name = object2.getName();
const bindName = object2.getName.bind(object)();
console.log(name) // minsu
console.log(bindName) // jiwoo
```
