const mostrarMenu = () => {
  
  return new Promise (resolve =>{
    console.log(`======================`.blue);
    console.log(` seleccione una opcion `.blue);
    console.log(`======================`.blue);
    console.log(`${'1.'.blue} Crear nuevo producto`);
    console.log(`${'2.'.blue} Listar producto`);
    console.log(`${'3.'.blue} listar clientes`);
    console.log(`${'4.'.blue} listar pedidos`);
    console.log(`${'5.'.blue} enviar pedidos`);
    console.log(`${'6.'.blue} Borar pedido`);
    console.log(`${'0.'.blue} sali\n`);
    
    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    readLine.question('seleccione una opción: ', (opt) => {
      readLine.close();
      resolve(opt);
    })

  } )
};

const pausa = () => {
  
  return new Promise(resolve => {
    
    const readLine = require ('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    readLine.question(`\nPresione ${'ENTER'} para continuar \n`, (opt) => {
      readLine.close();
      resolve();
      
    })
  })
};

module.exports = {
  mostrarMenu,
  pausa
}