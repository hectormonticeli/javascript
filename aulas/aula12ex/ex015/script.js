function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0  || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero  = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-m.jpg')
            } else if (idade < 21) {
                //Adolescente
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }
        } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-f.jpg')
            } else if (idade < 21) {
                //Adolescente
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Verificamos ${gênero} com ${idade} anos`
        res.appendChild(img)
        img.style.width = '250px'
        img.style.borderRadius = '50%'
    }
}