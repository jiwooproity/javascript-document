const object = {
  nickname: "mati",
};

const proxyHandler = {
  get(target, prop, receiver) {
    return `닉네임은 ${target[prop]}입니다.`;
  },
};

// (target: Proxy의 대상이 되는 객체, handler: target의 여러 트랩을 정의) => {}
const proxy = new Proxy(object, proxyHandler);
console.log(proxy.nickname);
