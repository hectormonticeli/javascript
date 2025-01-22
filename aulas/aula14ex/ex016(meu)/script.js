function contar() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('div#res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)

        if (passo == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }

        res.innerHTML = '<p>Contando:</p>'

        for(var c = inicio; c <= fim; c += passo) {
            res.innerHTML += c
            res.innerHTML += '&#128073;'
        }

        res.innerHTML += '&#127988;'
    }
}