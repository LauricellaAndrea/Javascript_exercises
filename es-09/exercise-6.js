const person = {
  firstname: 'john',
  lastname: 'Doe',
  age: '32',
  city: 'Rome',
  job: 'developer,'
};

function getKeys(obj) {
  const keys = [];
  for(let key in person) {
      keys.push(key)
  }
  return keys
}

const keys = getKeys(person);
console.log(keys)