const colors = require('colors');

const {mostrarMenu, pausa} = require('./proy_modules/menu.js');

const main = async() => {
  console.clear();
  console.log(`****************************`);
  console.log(`*     Menu principal.      *`);
  console.log(`****************************\n`);
  
  let option = '';
  
  do{
      do{
      option = await mostrarMenu();
    }while(!(option >=0 && option<=6))
    
    if (option !=='0'){
      console.log(`\nSe ejecuta el proceso ${option}`);
        await pausa();
    }
 }while (option !=='0' );
   
  };
 
 main();

  


