let array = []
let txtn = document.querySelector('input#txtn')
let seltab = document.querySelector('select#select')
let res = document.querySelector('div#res')

function adicionar() {
    if(txtn.value.length == 0) {
        alerta()
    } else {
        res.innerHTML = ''
        n = Number(txtn.value)
        if (array.indexOf(n) != -1 || n < 1 || n > 100) {
            alerta()
        } else {
            array.push(Number(n))
            let option = document.createElement('option')
            option.innerHTML = `Valor ${n} adicionado.`
            seltab.appendChild(option)
        }
    }
    txtn.value = ''
}

function alerta() {
    window.alert('Valor inválido ou já está na lista!')
}

function finalizar() {
    if (array.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        array.sort(function(a, b){return a - b})
        res.innerHTML = `<p>Ao todo temos ${array.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${array[array.length-1]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${array[0]}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma(array)}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma(array)/array.length}</p>`
    }
}

function soma(a=[]) {
    let s = 0
    for (let c=0; c < a.length; c++) {
        s += a[c]
    }
    return s
}