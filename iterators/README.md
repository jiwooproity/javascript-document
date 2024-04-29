# iterable이란?

iterator 객체를 반환하는 Symbol.iterator 함수를 내부적으로 가지고 있는 경우, **반복이 가능한 객체**로서 iterable한 객체라고 말할 수 있습니다.

iterable 객체의 조건을 만족하려면 위에서 말했다 싶이 Symbol.iterator 함수를 가지고 있어야 합니다.

또한, Symbol.iterator 함수는 iterator 객체를 반환해야 합니다.

이러한 iterator 객체를 반환하는 함수를 가진 객체를 iterable protocol의 만족되는 iterable 객체라고 합니다.

```
// iterator 객체를 반환하는 iterator 함수를 내부적으로 포함한 iterable 객체
const iterable = {
  from: 1,
  to: 5,
  // iterator 객체를 반환하는 함수 포함
  [Symbol.iterator]() {
    return {
      from: this.from,
      to: this.to,

      next() {
        while (this.from <= this.to) {
          return { value: this.from++, done: false };
        }

        return { value: undefined, done: true };
      },
    };
  },
};

for (let n of iterable) {
  console.log(n); // 1, 2, 3, 4, 5
}
```

# iterator란?

iterator 객체란 **반복이 가능한 객체**를 말하며 iterator protocol을 만족하는 경우에 iterator 객체라고 말할 수 있습니다.

iterator protocol에 만족하려면 next() 메서드를 통해 순차적으로 value와 done 프로퍼티를 반환하는 객체가 되어야 합니다.

여기서 value는 순회를 통해 꺼내온 값들이 담겨 반환되고 done은 반복이 마루리 되었는 지를 나타내는 논리 값이 담깁니다.

포함하여 이러한 iterator 객체를 반환하는 Symbol.iterator 함수를 가진 객체를 iterable 객체라 할 수 있습니다.

```
const object = { a: 1, b: 2, c: 3 };

// iterator 객체를 반환하는 함수 작성
object[Symbol.iterator] = function() {
    let count = 0;
    const keys = Object.keys(this);

    return {
        next() {
            const key = keys[count++];
            return {
                value: { [key]: object[key] },
                done: count > keys.length,
            }
        }
    };
};

for(let each of object) {
    console.log(each); // { a: 1 }, { b: 2 }, { c: 2 } = { [key]: object[key] }
}
```
