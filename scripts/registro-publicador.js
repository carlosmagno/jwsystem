function abreRegPub(){
    var telaRegistrarPublicador = document.getElementById('RegistrarPublicador')
    telaRegistrarPublicador.setAttribute("class","aparente")

    var nomePub = document.getElementById('nomePub ')

    var ref = firebase.database().ref(`${localStorage.getItem("cong")}/Publicadores/`);
    ref.child('1').once('value').then(snapshot =>{
        //var objgrupo={}
        console.log(snapshot.val())
        snapshot.forEach(function (childSnapshot){
            var objgrupo=childSnapshot.val()
           //var grupo=  childSnapshot.val()
           var chave = childSnapshot.key
           console.log(chave)
           console.log(objgrupo)
           ref.child(chave).set(objgrupo).then(
            console.log("publicador cadastrado")
           );
                // let publicadores = Object.keys(objgrupo);
                // let valores = Object.values(objgrupo)
           //console.log(generos);
                // publicadores.forEach((publicador) => console.log(publicador));
                // valores.forEach((valor)=>console.log(valor))
        //    ref.child(chave).once('value').then(snapshot=>{
  
        //     var pubGrupo =  childSnapshot.val()
        //     var pubChave = childSnapshot.key
        //     console.log(pubChave)
        //     console.log(pubGrupo)
        //    })
        })
    });
};

function fechaRegPub(){
    document.getElementById("formRegPub").reset()
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
