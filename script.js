var luxo = document.getElementsByClassName('luxo')
var totalL = document.querySelector('strong#totalL')

var x = 0
for(i in luxo){

    luxo[i].addEventListener('change',teste(i))
}
function teste(x) {
    totalL.innerHTML = `${i}`
}