const names: Array<string> = [];

const promise: Promise<string> = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      resolve('Working now !');
    }, 2000);
  }
);

promise.then((data) => console.log(data));
