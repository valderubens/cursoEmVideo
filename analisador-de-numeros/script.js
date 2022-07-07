let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) { //testa se o número inserido na caixa é válido (entre 1 e 100)
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { //ATENÇÃO PARA DÚVIDA AQUI. REVER AULA 15.
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { //aqui foram criadas duas análises que serão exploradas em outras funções acima
        valores.push(Number(num.value))
        let item = document.createElement('option') //item cria element 'option'
        item.text = `O valor ${num.value} foi adicionado.` //item.text contém o texto a ser adicionado no select
        lista.appendChild(item) //imprime o texto de item no select lista
        res.innerHTML =  '' //limpa res quando a lista for alterada

    } else {
        window.alert(`Valor inválido ou já existente na lista.`)
    }
    num.value = '' //apaga o valor digitado no objeto num após adicionado à lista
    num.focus() //volta o foco de digitação para o objeto num
    
} 


//ADICIONAR FUNÇÕES AO BOTÃO FINALIZAR

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores para continuar!')
    } else {
        let total = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        //as variáveis que serão manipuladas receberam um valor inicial == 0

        for(let pos in valores) { //for...(let in) é um laço de percurso que varre todo o vetor
            soma += valores[pos] //soma será 0(valor inicial) + os valores[]
            if(valores[pos] > maior) //valores[pos] são inseridos pelo usuário //se forem maiores que o valor contido na chave 0
                maior = valores[pos] //então maior recebe o novo valor inserido pelo usuário
            if(valores[pos] < menor) //se o valor inserido por último for menor que o valor atual de menor
                menor = valores[pos] //então menor contém o novo valor inserido
        }

        media = soma / total
        res.innerHTML = '' //começa com o res em branco
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>` //atenção para a concatenação aqui +=
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}`
        res.innerHTML += `<p>A média dos números cadastrados é ${media}</p>`      
    }    
}