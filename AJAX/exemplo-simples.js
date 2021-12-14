// Quando a página estiver totalmente carregada, chama essa função.
window.onload = function() { 
    document.getElementById('btn').addEventListener('click', btn_click)
}

function btn_click() {
    // document.getElementById('caixa').innerHTML = 'Este é o texto alterado.'

    // AJAX
    let pedido = new XMLHttpRequest() // Objeto request

    pedido.onreadystatechange = function() { // Função que vai atuar mediante a resposta
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('caixa').innerHTML = this.responseText
        } else {
            document.getElementById('caixa').innerHTML = 'Tente mais tarde.'
        }
    }

    // Prepara o pedido
    pedido.open('GET', 'exemplo-simples.txt', true)
    
    // Envia o pedido
    pedido.send()
}