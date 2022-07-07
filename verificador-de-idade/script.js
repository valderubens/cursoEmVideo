function verificar() { //ativa com clique no botão verificar()
    var data = new Date() //recolhe dados de data/hora atuais do sistema
    var ano = data.getFullYear() //retorna o ano completo (os 4 dígitos)
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') //criei um elemento 'img'
        img.setAttribute('id', 'foto') //declarei um id=foto para o elemento 'img'
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'homem-crianca.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute ('src', 'homem-jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'mulher-crianca.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                //Idosa
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center' //centraliza o texto quando essa linha for executada
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //comando que de fato apresenta a imagem
    }


}