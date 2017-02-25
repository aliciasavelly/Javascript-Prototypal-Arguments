// function sum() {
//   let total = 0;
//   Array.from(arguments).forEach(num => {
//     total += num;
//   });
//   return total;
// }

function sum(...nums) {
  let total = 0;
  nums.forEach(num => {
    total += num;
  });
  return total;
}

// console.log(sum(1, 2, 3, 4, 5, 17));

Function.prototype.myBind = function(context, ...bindargs) {
  return (...callargs) => this.call(context, ...bindargs, ...callargs);
};

function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(n) {
    numbers.push(n);
    if(numbers.length === numArgs) {
      return numbers.reduce((acc, el) => acc + el, 0);
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) {
  const elements = [];

  let _curry = el => {
    elements.push(el);
    if(elements.length === numArgs) {
      return this(...elements);
    } else {
      return _curry;
    }
  };

  return _curry;
};

let addFour = sum.curry(4);

console.log(addFour(4)(3)(2)(554));
