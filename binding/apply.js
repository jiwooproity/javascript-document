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

const applied = object2.getJob.apply(object, ["123"]);
console.log(applied); // ["developer", "123"]
