function gerarTabuada() {
    var txtnum = document.querySelector('input#txtnum')
    var res = document.querySelector('div#res')
    if (txtnum.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!')
    } else {
        num = txtnum.value
        res.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            res.innerHTML += `<p>${num} x ${c} = ${num * c}</p>`
        }
    }
}