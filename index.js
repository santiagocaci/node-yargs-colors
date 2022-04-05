const argv = require('./config/yargs.js');
const { crearArchivo } = require('./helpers/multiplicar.js');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then(console.log)
  .catch(console.log);