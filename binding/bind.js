const object = {
  job: "developer",
  getJob: function () {
    return this.job;
  },
};

const object2 = {
  job: "no-developer",
  getJob: object.getJob,
};

const binded = object2.getJob.bind(object);
const result = binded();
console.log(result); // developer
