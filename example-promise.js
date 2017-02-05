// challenge area

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a == 'number' && typeof b == 'number') {
      resolve(a+b);
    } else {
      reject('Input is not two numbers');
    }
  })
}

addPromise(2, 10).then(function (a) {
    console.log(a);
},
  function(a) {
    console.log("Error!", a);
  }
);
