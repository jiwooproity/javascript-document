const object = {
  job: "developer",
  getJob: function (...arguments) {
    return [this.job, ...arguments];
  },
};

const object2 = {
  job: "no-developer",
  getJob: object.getJob,
};

const called = object2.getJob.call(object, "123", "321");
console.log(called); // ["developer", "123", "321"]
