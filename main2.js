function cuenta_regresiva(cuenta){
          if (cuenta==11){
                    return cuenta
          }else{
                    console.log("cuenta")
                    return cuenta_regresiva(cuenta-1)
          }
}alert (cuenta_regresiva(10))
