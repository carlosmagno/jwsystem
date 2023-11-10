function abreRegPub(){
    var telaRegistrarPublicador = document.getElementById('RegistrarPublicador')
    telaRegistrarPublicador.setAttribute("class","aparente")
};

function fechaRegPub(){
    var telaRegistrarPublicador = document.getElementById('RegistrarPublicador')
    telaRegistrarPublicador.setAttribute("class","oculto")
};



function capturaPublicador(){
    
    // Variáveis dos formulários do Registro de Publicador
    var grupoPub = document.getElementById('grupoPub').value
    var nomePub = document.getElementById("nomePub").value
    var nascimento = document.getElementById("nascimento").value
    var batismo = document.getElementById("batismo").value
    var sexo = document.getElementById("sexo").value
    var esperanca = document.getElementById("esperanca").value
    var PSvaroes = document.getElementById("PSvaroes").value
    var PScampo = document.getElementById("PScampo").value


    NovoPublicador = {
        grupoPub,
        nomePub,
        nascimento,
        batismo,
        sexo,
        esperanca,
        PSvaroes,
        PScampo

    };
    console.log(NovoPublicador)
    return NovoPublicador
}
