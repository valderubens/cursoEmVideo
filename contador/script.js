var inicio = document.querySelector('input#inicio')
var fim = document.querySelector('input#fim')
var passo = document.querySelector('input#passo')
var res = document.querySelector('div#res')

function contar() {
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    //res.innerHTML = i + f + p
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Por favor, verifique se todos os dados foram preenchidos')
    } else {
        res.innerHTML = `Contando:</br>`
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1.')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `\u{1F449}${c} ` // a contra barra u \u seguida de código adiciona emoji
            }
        } else {
            for (let c = i; c >= f; c = c -= p) {
                res.innerHTML += ` \u{1F449}${c} `
            }
        }
        res.innerHTML += `\u{1F987}`
    }
}