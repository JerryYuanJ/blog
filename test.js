const input = {
  a: 1,
  b: [1, 2, { c: true }, [3]],
  d: { e: 2, f: 3 },
  g: null,
}

function flat(obj) {
  let ret = {}

  const isObject = val => Object.prototype.toString.call(val) === '[object Object]'

  function handle(lastKey, val) {
    if (val) {
      let result = {}
      if (isObject(val)) {
        for (let i in val) {
          result = Object.assign(result, handle(`${lastKey}.${i}`, val[i]))
        }
      } else if (Array.isArray(val)) {
        val.forEach((v, idx) => {
          result = Object.assign(result, handle(`${lastKey}[${idx}]`, v))
        })
      } else {
        result[lastKey] = val
      }
      return result;
    }
  }

  for (let key in input) {
    ret = Object.assign(ret, handle(key, input[key]))
  }

  return ret
}

console.info(flat(input))

/**
 * 1. 请使用 JavaScript 实现名为 flatten(input) 的函数，可以将传入的 input 对象
（Object 或者 Array）进行扁平化处理并返回结果。具体效果如下：

    const input = {
        a: 1,
        b: [ 1, 2, { c: true }, [ 3 ] ],
        d: { e: 2, f: 3 },
        g: null,
    }

    flatten(input);
    // 返回
    {
        "a": 1,
        "b[0]": 1,
        "b[1]": 2,
        "b[2].c": true,
        "b[3][0]": 3,
        "d.e": 2,
        "d.f": 3,
        // "g": null,  值为null或者undefined，丢弃
    };
 */
/*
const input = {
  a: 1,
  b: [1, 2, { c: true }, [3]],
  d: { e: 2, f: 3 },
  g: null,
}

function flatten(input) {
  let result = {}

  const isObject = val => Object.prototype.toString.call(val) === '[object Object]'

  function flat(innerKey, innerInput) {
    if (innerInput) {
      let temp = {}
      if (isObject(innerInput)) {
        // 处理 Object
        for (let key in innerInput) {
          temp = Object.assign(temp, flat(`${innerKey}.${key}`, innerInput[key]))
        }
      } else if (Array.isArray(innerInput)) {
        // 处理 Array
        for (let key in innerInput) {
          temp = Object.assign(temp, flat(`${innerKey}[${key}]`, innerInput[key]))
        }
      } else {
        // 其他
        temp[innerKey] = innerInput
      }
      return temp
    }
  }

  for (let key in input) {
    result = Object.assign(result, flat(key, input[key]))
  }
  return result
}

var a = flatten(input)
console.info(a)

*/

/**
 * 请根据面对对象编程的思想，设计一个类型 Cash 用于表达人民币，使得：
  class Cash {
  }
  const cash1 = new Cash(105);// 1元5分
  const cash2 = new Cash(66); // 6角6分
  const cash3 = cash1.add(cash2); // 相加

  const cash4 = Cash.add(cash1, cash2); // 静态相加
  const cash5 = new Cash(cash1 + cash2); // 实例相加？
  console.log(`${cash3}`, `${cash4}`, `${cash5}`);
 */
/*
function Cash(num) {
  this.num = num
}

Cash.prototype.add = function (instance) {
  return new Cash(this.num + instance.num)
}

Cash.prototype.toString = function () {
  return (this.num + '').replace(/(.)(..)$/,"$1元$2") // 1元71
    .replace(/(.)(.)$/,"$1角$2") // 1元7角1
    +"分"; // 1元7角1分
}

Cash.prototype.valueOf = function () {
  return this.num
}

Cash.add = function (c1, c2) {
  return new Cash(c1.num + c2.num)
}

const cash1 = new Cash(105);// 1元5分
const cash2 = new Cash(66); // 6角6分
const cash3 = cash1.add(cash2); // 相加
const cash4 = Cash.add(cash1, cash2); // 静态相加
const cash5 = new Cash(cash1 + cash2);
console.log(`${cash3}`, `${cash4}`, `${cash5}`);
*/