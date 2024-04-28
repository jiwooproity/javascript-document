const object = {
  job: "developer",
  getJob: () => {
    function getData() {
      return this;
    }

    return getData();
  },
};

const result = object.getJob();
console.log(result);
