const bcrypt = require('bcrypt');
const password = '1234';
const saltRound = 10;

let hashed = bcrypt.hashSync(password, saltRound);
console.log(`password: ${password}, hashed:${hashed}`);
const result = bcrypt.compareSync(password, hashed);
console.log(`Password is Same: ${result}`);
const result1 = bcrypt.compareSync('fasdfdsa', hashed);
console.log(`Password is Same: ${result1}`);

const asyncFunc = async () => {
  let hashed = await bcrypt.hash(password, saltRound);
  console.log(`password: ${password}, hashed:${hashed}`);
  const result = await bcrypt.compare(password, hashed);
  console.log(`Password is Same: ${result}`);
};

asyncFunc();
