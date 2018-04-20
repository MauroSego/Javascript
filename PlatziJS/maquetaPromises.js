// Ejemplo
const promise = new Promise(function (resolve, reject){
  setTimeout(function(){
    reject(new Error('Se produjo un error'))
  }, 1000)
})

promise
  .then(function(){
  
})
  .catch(function(err)){
         
})
