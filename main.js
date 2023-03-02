function cuenta_regresiva(cuenta){
          if (cuenta==11){
                    return cuenta
          }else{
                    console.log("cuenta")
                    return cuenta_regresiva(cuenta-1)
          }
}alert (cuenta_regresiva(10))

// funcion declarada
let parOimpar = (num) => {
          if (num === 0){
                    return 'num par';
          }else if (num === 1){
                    return 'num impar';
          }else{
                    return parOimpar(num - 2);
          }
}

// funcion normal

function parOimpar(num){
          if(num===0){
                    return 'es par'
          }else if(num===1){
                    return'es impar'
          }else{
                    return parOimpar
          }
}
console.log(parOimpar)

