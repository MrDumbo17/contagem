var teste =  document.querySelector('#teste')

var luxo = document.querySelectorAll('.luxo')
var simples = document.querySelectorAll('.simples')
var totalL = document.querySelector('strong#totalL')
var totalS = document.querySelector('strong#totalS')

var valTotalL = 0
var valTotalS = 0

var valBack = {tipo: '', loc: 0 , valor: 0}

function carregar() {
    luxo.forEach((setL) => setL.value = 0)
    luxo.forEach((valor,i) => valor.addEventListener('change',function(){somaL(i)}))
    luxo.forEach((valor,i) => valor.addEventListener('focus',function(){clicar('l',i)}))
    luxo.forEach((valor) => valor.addEventListener('blur',focusout))
    
    simples.forEach((setS) => setS.value = 0)
    simples.forEach((valor,i) => valor.addEventListener('change',function(){somaL(i)}))
    simples.forEach((valor,i) => valor.addEventListener('focus',function(){clicar('s',i)}))
    simples.forEach((valor) => valor.addEventListener('blur',focusout))
    
}
 
function clicar(type, loc){

    if(type == 'l'){
        valBack.tipo = 'luxo'
        valBack.loc = loc
        valBack.valor = luxo[loc].value

        luxo[loc].value = ''
    }else if (type == 's'){
        valBack.tipo = 'simples'
        valBack.loc = loc
        valBack.valor = simples[loc].value
        simples[loc].value = ''
    }

    
   
    
}
function focusout(){
    
   
    

    if(valBack.tipo == 'luxo' && luxo[valBack.loc].value == ''){
        luxo[valBack.loc].value = valBack.valor
    }else if (valBack.tipo == 'simples' && simples[valBack.loc].value == ''){

        simples[valBack.loc] = valBack.valor
    }    
    
}
function somaL(x = 0) {

    valTotalL = 0
    for(let i = 0; i < --luxo.length; i++)
    {
        valTotalL += Number(luxo[i].value)
    }
    totalL.innerHTML = valTotalL
}
function somaS(x = 0) {

    valTotalS = 0
    for(let i = 0; i < --simples.length; i++)
    {
        valTotalS += Number(simples[i].value)
    }
    totalS.innerHTML = valTotalS
}
    