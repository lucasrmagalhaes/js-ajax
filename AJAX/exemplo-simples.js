// Quando a página estiver totalmente carregada, chama essa função.
window.onload = function() { 
    document.getElementById('btn').addEventListener('click', btn_click)
}

function btn_click() {
    // document.getElementById('caixa').innerHTML = 'Este é o texto alterado.'

    // AJAX
    let pedido = new XMLHttpRequest() // Objeto request

    pedido.onreadystatechange = function() { // Função que vai atuar mediante a resposta
        document.getElementById('caixa').innerHTML = this.responseText
    }

    pedido.open('GET', 'exemplo-simples.txt', true)
    pedido.send()
}