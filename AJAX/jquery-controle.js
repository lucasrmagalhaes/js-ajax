$(document).ready(
    function() {
        $("#cmd").click(
            function() {
                $("#caixa").load("jquery-controle.txt", function(responseTxt, statusTxt, xhr) {
                    if (statusTxt == "success") {
                        alert("Comunicação com sucesso.")
                    } else if (statusTxt == "error") {
                        alert("Erro: " + xhr.status + ": " + xhr.statusTxt)
                    }
                })
            }
        )
    }
) 