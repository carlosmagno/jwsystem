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
    var formRegPub = document.getElementById("formRegPub")
    var grupoPub = formRegPub.grupoPub.value
    var nomePub = formRegPub.nomePub.value
    var nascimento = formRegPub.nascimento.value
    var batismo = formRegPub.batismo.value
    var sexo = formRegPub.sexo.value
    var esperanca = formRegPub.esperanca.value
    var PSvaroes = formRegPub.PSvaroes.value
    var PScampo = formRegPub.PScampo.value
    var contatoEmg = formRegPub.contatoEmg.value


    NovoPublicador = {
        grupoPub,
        nomePub,
        nascimento,
        batismo,
        sexo,
        esperanca,
        PSvaroes,
        PScampo,
        contatoEmg

    };
    // console.log(NovoPublicador)
    // return NovoPublicador
}
