var pic = document.querySelector('div#pic')
var img = document.createElement('img') //criei o elemento img
img.setAttribute('src', 'cinema.png') //declarei id='cinema.png' para o elemento foto
lisbela = document.querySelector('p#lisbela')
function showSP() {
    img.setAttribute('src', 'sao-paulo.png')
}
function showRJ() {
    img.setAttribute('src', 'rio.png')
}
function show0() {
    img.setAttribute('src', 'lisbela.png') //mudei 
}
function show1() {
    img.setAttribute('src', 'johnny.png') //mudei 
}
function show2() {
    img.setAttribute('src', 'ralo.png') //mudei 
}
function hide() {
    img.setAttribute('src', 'cinema.png') //adicionar imagem genérica de cinema
    
}
pic.appendChild(img)
