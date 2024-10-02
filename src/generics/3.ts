function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const obj1 = { name: 'Mango', age: 30 };
const obj2 = { color: 'Yellow', weight: 200 };

const merged = merge(obj1, obj2);
console.log(merged);