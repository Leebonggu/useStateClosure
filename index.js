const { useState } = require('./useState');
const [a, setA] = useState(1);
console.log(a());
setA(10);
console.log(a());