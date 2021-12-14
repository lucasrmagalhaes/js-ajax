// javascript
function fnAJAX(url, funcao) {
    let pedido = new XMLHttpRequest();

    // resposta
    pedido.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            funcao(pedido);
        }
    }

    // enviar pedido
    pedido.open('GET', url, true);
    pedido.send();
}

function comando1(pedido) {
    document.getElementById('caixa1').innerHTML = pedido.responseText;
}

function comando2(pedido) {
    document.getElementById('caixa2').innerHTML = pedido.responseText;
}