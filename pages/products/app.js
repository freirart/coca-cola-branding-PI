//PARA ALTERAR ENTRE A LATA E A GARRAFA 

let garrafa = document.querySelector('#garrafa')
let latinha = document.querySelector('#latinha')

let tamanhoLata = document.querySelector('#tamanho-lata')
let tamanhoGarrafa = document.querySelector('#tamanho-garrafa')

latinha.style.display = "none"

tamanhoGarrafa.addEventListener("click", function(){
    garrafa.style.display = "block"
    latinha.style.display = "none"
})

tamanhoLata.addEventListener("click", function(){
    latinha.style.display = "block"
    garrafa.style.display = "none"
})



