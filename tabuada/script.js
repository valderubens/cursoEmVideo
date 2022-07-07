function tabuada() {
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) //converte string pra number
        let c = 1
        tab.innerHTML = '' //sem esse comando o select não limpará para impressão de novos resultados
        while (c <= 10) {
            let item = document.createElement('option') //criei um elemento html dinamicamente. pode ser feito usando <option></option>
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item) //comando para imprimir de fato
            c++
        }
    }
}