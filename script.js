var luxo = document.getElementsByClassName('luxo')
var totalL = document.querySelector('strong#totalL')

var valTotalL = 0

for(let i in luxo){

    luxo[i].addEventListener('change',function(){soma(i)},false)
    
}

 

function soma(x = 0) {

    valTotalL = 0

    for(let i in luxo)
    {
        valTotalL = Number(valTotalL) + Number(luxo[i].value)
    }
    
    totalL.innerHTML = valTotalL
}
    