


var messagemAuto = document.getElementById('messagemAuto')


function exibebtnConfigAdmin(){
    var btnConfigAdmin = document.getElementById('btnConfigAdmin')
    btnConfigAdmin.setAttribute('class', 'imgBarraSuperior')
}

function ocultabtnConfigAdmin(){
  var btnConfigAdmin = document.getElementById('btnConfigAdmin')
  if(btnConfigAdmin){
    btnConfigAdmin.setAttribute('class', 'oculto')
  }

}


var userEmAlteracao;

function exibeAreaAdmin(){
    var areaAdmin = document.getElementById('areaAdmin')
    var dadosBDAdmin = document.getElementById("dadosBDAdmin");
  
    areaAdmin.setAttribute('class', 'aparente')
    var refUsuarios = firebase.database().ref(`${localStorage.getItem("cong")}/Usuários`);
    refUsuarios.get().then((snapshot)=>{

        if (snapshot.exists()) {

          var perfilUpdate = document.createElement('select')
          perfilUpdate.setAttribute('class', 'selectDinamica')
          perfilUpdate.setAttribute( 'id','selectUsers')

          var opcao2 = document.createElement('option')
          opcao2.setAttribute("label", "")
          perfilUpdate.appendChild(opcao2)

          if(dadosBDAdmin.innerHTML==''){

            snapshot.forEach((childSnapshot) =>{
              ValorNo = childSnapshot.val()
              chave = childSnapshot.key

                  var conteudoNovo = document.createTextNode(ValorNo.email);
                  var opcao = document.createElement('option')
                  

                  opcao.setAttribute("label", ValorNo.email)
                  opcao.setAttribute('value', chave)
                  opcao.appendChild(conteudoNovo)
                  perfilUpdate.appendChild(opcao)
                  

            });

            dadosBDAdmin.appendChild(perfilUpdate);
            var selectUsers = document.getElementById('selectUsers')
            selectUsers.onchange = alteraPerfil

          }else{
            console.log("Já está exibindo os usuários")
          }
        } else {
          console.log("Não há dados neste nó, aguarde ...");
          var usuarioAdmin ={
            email,
            displayName,
            perfil:"Admin"
          }
          refUsuarios.child(uid).set(usuarioAdmin)
          console.log(`Usuário admin cadastrado: ${displayName}`);
        }
    
    })

}

function atualizaUsuario(){

}

function analisaCheckboxes(checK){
  var checK1 = document.getElementById(`${checK}`).value;
   //var valor = checK1.getAttribute('checked')

  // if(valor=="" ||valor=="checked"){
  //   checK1.setAttribute('checked','checked')
  //   valor = "on"
    
  // }else if(valor==null){

  //   checK1.removeAttribute('checked')
  //   valor = "off"
  // }
  console.log(checK1)
  return checK1

}




function salvaPerfil(){

    var spanNomeUsuario = document.getElementById('spanNomeUsuario');

    var refUsuarios = firebase.database().ref(`${localStorage.getItem("cong")}/Usuários`);

    var val1 = analisaCheckboxes('chkRegPublicadores')
    var val2 = analisaCheckboxes('chkConPublicadores')
    var val3 = analisaCheckboxes('chkRegRelatorios')
    var val4 = analisaCheckboxes('chkConRelatorios')
    var val5 = analisaCheckboxes('chkRegReunioes')
    var val6 = analisaCheckboxes('chkConReunioes')

    var perfilBD ={
      chkRegPublicadores: val1,
      chkConPublicadores: val2,
      chkRegRelatorios: val3,
      chkConRelatorios: val4,
      chkRegReunioes: val5,
      chkConReunioes: val6,
    }

    refUsuarios.child(spanNomeUsuario.innerText).child("perfil").set(perfilBD).then(
    console.log("Perfil do usuário salvo!"), console.log(perfilBD)
    )


  
}

function exibemessagemAuto(){

    messagemAuto.innerText= `Você está logado como ${email}`

}

function fechaAreaAdmin(){
    var areaAdmin = document.getElementById('areaAdmin')
    areaAdmin.setAttribute("class","oculto")
};

function fechaConsultaGrupo(){
  var ConsultaGrupo = document.getElementById('ConsultaGrupo')
  ConsultaGrupo.setAttribute("class","oculto")
};

function alteraPerfil(){
    var refUsuarios = firebase.database().ref(`${localStorage.getItem("cong")}/Usuários`);

    var chkRegPublicadores = document.getElementById('chkRegPublicadores');
    var chkConPublicadores = document.getElementById('chkConPublicadores');
    var chkRegRelatorios = document.getElementById('chkRegRelatorios');
    var chkConRelatorios = document.getElementById('chkConRelatorios');
    var chkRegReunioes = document.getElementById('chkRegReunioes');
    var chkConReunioes = document.getElementById('chkConReunioes');
    var spanNomeUsuario = document.getElementById('spanNomeUsuario');
  
    //console.log('evt.target: ', evt.target) 
    //console.log("value: ", this.value)
    //console.log("label: ", this.label)
    userEmAlteracao = this.value
    console.log("value: ", this.value)
  
    refUsuarios.child(userEmAlteracao).child('perfil').get().then((snapshot)=>{
      var perfilExistente =  snapshot.val()
      
      spanNomeUsuario.innerText=""
      spanNomeUsuario.innerText = this.value;
      console.log("perfil baixado do BD")
  
      
    if(perfilExistente){
      console.log('perfil existente: ', perfilExistente )
      chkRegPublicadores.value = perfilExistente.chkRegPublicadores
      chkConPublicadores.value = perfilExistente.chkConPublicadores
      chkRegRelatorios.value = perfilExistente.chkRegRelatorios
      chkConRelatorios.value = perfilExistente.chkConRelatorios
      chkRegReunioes.value = perfilExistente.chkRegReunioes
      chkConReunioes.value = perfilExistente.chkConReunioes

      // if(perfilExistente.chkRegPublicadores=="on"){chkRegPublicadores.setAttribute("checked","checked")}
      // else{chkRegPublicadores.removeAttribute("checked")};
  
      // if(perfilExistente.chkConPublicadores=="on") {chkConPublicadores.setAttribute("checked","checked")}
      // else{chkConPublicadores.removeAttribute("checked")};
  
      // if(perfilExistente.chkRegRelatorios=="on") {chkRegRelatorios.setAttribute("checked","checked")}
      // else{chkRegRelatorios.removeAttribute("checked")};
  
      // if(perfilExistente.chkConRelatorios=="on") {chkConRelatorios.setAttribute("checked","checked")}
      // else{chkConRelatorios.removeAttribute("checked")}; 
  
      // if(perfilExistente.chkRegReunioes=="on") {chkRegReunioes.setAttribute("checked","checked")}
      // else{chkRegReunioes.removeAttribute("checked")};
  
      // if(perfilExistente.chkConReunioes=="on") {chkConReunioes.setAttribute("checked","checked")}
      // else{chkConReunioes.removeAttribute("checked")};
  
    }else{
      console.log('ainda não existe perfil')
    }
  
    });
    
  
}

window.onload = function (){
  anorodape()
}
  

function anorodape(){
  var novaData = new Date
  var ano = novaData.getFullYear()
  var spananoRodape = document.getElementById('anoRodape')
  spananoRodape.innerText = ano
}

