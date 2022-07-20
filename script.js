function validaArray(obj,num){
    try{
        if(!obj && !num) throw new ReferenceError('Envie os parametros!')
        if(typeof obj !== 'object') throw new TypeError('Obj não é um object!')
        if(typeof num !== 'number') throw new TypeError('Num não é um numero!')
        if(obj.length !== num) throw new RangeError('Tamanho invalido!')
        return obj
    }catch(e){
        if(e instanceof ReferenceError){
            console.log('Esse é um ReferenceError')
            console.log(e.message)
        }else if(e instanceof TypeError){
            console.log('Esse é um TypeError')
            console.log(e.message)
        }else if(e instanceof RangeError){
            console.log('Esse é um RangeError')
            console.log(e.message)
        }else{
            console.log('Tipo de erro não esperado:'+ e)
        }
    }
}

