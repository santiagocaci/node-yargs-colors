const colors = require('colors/safe');
const { options } = require('yargs');

const argv = require('yargs')
  .options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base de la tabla de multiplicar',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw colors.red('La base tiene que ser un numero');
    }
    return true;
  })
  .options('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla de multiplicar'
  })
  .options('h',{
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Multiplica hasta el numero',
  })
  .check((argv, options)=>{
    if (isNaN(argv.h)) {
      throw colors.red('El h tiene que ser un numero');
    }
    return true;
  })
  .argv;

module.exports = argv;