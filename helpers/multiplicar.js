const fs = require('fs');
const colors = require('colors/safe');
const crearArchivo = async (base = 1, listar = false, hasta = 10) => {

  try {
    let salida = '';
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}`;
      if (i < hasta) {
        salida += `\n`
      }
    }
    if (listar) {
      // console.log('================');
      // console.log('   Tabla del', base);
      // console.log('================');
      // console.log(salida);
      console.log(colors.blue(`
===================
    tabla del ${base}
===================
${salida}
      `
      ));
    }
    // Opcion con writeFile que utiliza un callback
    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //   if (err) throw err;
    //   console.log('The file has been saved!');
    // })
    // Opcion con writeFileSync que es un a funcion sincrona
    fs.writeFileSync(`./output/tabla-${base}.txt`, salida);
    return colors.cyan(`tabla-${base}.txt creada`);
  } catch (err) {
    throw err;
  }
}

module.exports = {
  crearArchivo,
}