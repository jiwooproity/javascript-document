const object = {
  nickname: "mati",
};

const proxyHandler = {
  set(target, prop, value, receiver) {
    const type = typeof value;

    if (type === "string") {
      const message = `설정된 닉네임은 ${value}입니다.`;
      return (target[prop] = message);
    } else {
      throw new Error("문자열을 입력해 주세요.");
    }
  },
};

const proxy = new Proxy(object, proxyHandler);
proxy.nickname = "jiwoo";
console.log(proxy.nickname);
