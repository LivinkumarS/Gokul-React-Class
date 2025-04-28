// console.log("Process Start");

// setTimeout(() => {
//   console.log("Proceed!");
// }, 5000);

// console.log("Process End");

const promise = new Promise((resolve, reject) => {
  const success = false;
  if (success) {
    resolve("Promise fulfilled");
  } else {
    reject("Failed");
  }
});

console.log("Started");

// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

const promFunc = async () => {
  try {
    const value =  promise;
    console.log(value);
  } catch (err) {
    console.log(err);
  }
};

promFunc();

console.log("Finished");
await