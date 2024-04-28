const object = {
  job: "developer",
  getJob: () => {
    return this.job;
  },
};

const object2 = {
  job: "no-developer",
  getJob: object.getJob,
};

const result = object2.getJob();
console.log(result); // undefined

const scope = {
  job: "scope",
  getJob: function () {
    const arrow = () => {
      return this.job;
    };

    return arrow();
  },
};

const scope2 = {
  job: "scrope2",
  getJob: scope.getJob,
};

const result2 = scope2.getJob();
console.log(result2); // scope2
