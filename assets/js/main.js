function descodificador() {
    let inputTexto = document.querySelector("#input-texto");
    let btnCriptografar = document.querySelector("#criptografar-btn");
    let btnDescriptografar = document.querySelector("#descriptografar-btn");
    let areaSemResultado = document.querySelector("#sem-resultado");
    let textoResultado = document.querySelector("#resultado");
    let btnCopiarResultado = document.querySelector("#copiar-resultado");

    function verificarCaracteresNaoAceitos(inputTexto) {
        let caracteres = /[^a-z\s]/;
        return caracteres.test(inputTexto); //retorna true se não tiver os caracteres não aceitos
    }

    function criptografar(inputTexto){
        // A letra "e" é convertida para "enter"
        // A letra "i" é convertida para "imes"
        // A letra "a" é convertida para "ai"
        // A letra "o" é convertida para "ober"
        // A letra "u" é convertida para "ufat"
        return inputTexto
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat");
    }

    function descriptografar(inputTexto) {
        return inputTexto
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");
    }

    btnCriptografar.addEventListener("click", function() {
        let textoInicial = inputTexto.value;

        if (textoInicial === "") {
            alert("Digite um texto para ser criptografado");
            return;
        } 
        if (!verificarCaracteresNaoAceitos(textoInicial)) { //se o texto estiver formatado com a regra
            let textoParaCriptografar = criptografar(textoInicial); 
            textoResultado.textContent = textoParaCriptografar;
            areaSemResultado.style.display = "none";
            btnCopiarResultado.style.display = "flex";
        }
        else {
            alert("O texto pode conter apenas letras minúsculas e sem acento");
        }

        inputTexto.value = "";
    })

    btnDescriptografar.addEventListener("click", function(){
        let textoInicial = inputTexto.value;

        if (textoInicial === "") {
            alert("Digite um texto para ser descriptografado");
            return;
        } 
        if (!verificarCaracteresNaoAceitos(textoInicial)) {
            let textoParaDescriptografar = descriptografar(textoInicial);
            textoResultado.textContent = textoParaDescriptografar;
            areaSemResultado.style.display = "none";
            btnCopiarResultado.style.display = "flex";
        }
        else {
            alert("O texto pode conter apenas letras minúsculas e sem acento");
        }

        inputTexto.value = "";
    })

    btnCopiarResultado.addEventListener("click", function(){
        navigator.clipboard.writeText(textoResultado.textContent);
        alert("Texto copiado para a área de transferência!");
    })
}

window.addEventListener('DOMContentLoaded', descodificador())