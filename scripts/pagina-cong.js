


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
    var spanNomeUsuario = document.getElementById('spanNomeUsuario');
    
    /**
     *Elementos dos checkboxes
     */

     var chkRegPublicadores = document.getElementById('chkRegPublicadores');
     var chkConPublicadores = document.getElementById('chkConPublicadores');
     var chkRegRelatorios = document.getElementById('chkRegRelatorios');
     var chkConRelatorios = document.getElementById('chkConRelatorios');
     var chkRegReunioes = document.getElementById('chkRegReunioes');
     var chkConReunioes = document.getElementById('chkConReunioes');


    areaAdmin.setAttribute('class', 'aparente')
    var refUsuarios = firebase.database().ref(`${localStorage.getItem("cong")}/Usuários`);
    refUsuarios.get().then((snapshot)=>{

        if (snapshot.exists()) {

          var perfilUpdate = document.createElement('select')
          perfilUpdate.setAttribute('class', 'selectDinamica')
          var opcao2 = document.createElement('option')
          opcao2.setAttribute("label", "")
          perfilUpdate.appendChild(opcao2)

          if(dadosBDAdmin.innerHTML==''){

            snapshot.forEach((childSnapshot) =>{
              ValorNo = childSnapshot.val()
              chave = childSnapshot.key

                  var conteudoNovo = document.createTextNode(ValorNo.email);
                  var opcao = document.createElement('option')
                  var perfilExistente

                  opcao.setAttribute("label", ValorNo.email)
                  opcao.setAttribute('value', chave)
                  opcao.appendChild(conteudoNovo)
                  perfilUpdate.appendChild(opcao)
                  
                  perfilUpdate.onchange=function(){
                    //console.log('evt.target: ', evt.target) 
                    //console.log("value: ", this.value)
                    //console.log("label: ", this.label)
                    userEmAlteracao = this.value
                    refUsuarios.child(userEmAlteracao).child('perfil').get().then((snapshot)=>{
                      perfilExistente =  snapshot.val()
                      
                      spanNomeUsuario.innerText=""
                      spanNomeUsuario.innerText = this.value;
                      console.log("perfil baixado do BD")
                      chkRegPublicadores.removeAttribute("checked")
                      chkConPublicadores.removeAttribute("checked")
                      chkRegRelatorios.removeAttribute("checked")
                      chkConRelatorios.removeAttribute("checked")
                      chkRegReunioes.removeAttribute("checked")
                      chkConReunioes.removeAttribute("checked")
                      
                    if(perfilExistente){
                      console.log('perfil existente: ', perfilExistente )
                      if(perfilExistente.chkRegPublicadores=="on"){chkRegPublicadores.setAttribute("checked","checked")}
                      else{chkRegPublicadores.removeAttribute("checked")};

                      if(perfilExistente.chkConPublicadores=="on") {chkConPublicadores.setAttribute("checked","checked")}
                      else{chkConPublicadores.removeAttribute("checked")};

                      if(perfilExistente.chkRegRelatorios=="on") {chkRegRelatorios.setAttribute("checked","checked")}
                      else{chkRegRelatorios.removeAttribute("checked")};

                      if(perfilExistente.chkConRelatorios=="on") {chkConRelatorios.setAttribute("checked","checked")}
                      else{chkConRelatorios.removeAttribute("checked")}; 

                      if(perfilExistente.chkRegReunioes=="on") {chkRegReunioes.setAttribute("checked","checked")}
                      else{chkRegReunioes.removeAttribute("checked")};

                      if(perfilExistente.chkConReunioes=="on") {chkConReunioes.setAttribute("checked","checked")}
                      else{chkConReunioes.removeAttribute("checked")};

                    }else{
                      console.log('ainda não existe perfil')
                    }

                    });
                    

                  }
            });

            dadosBDAdmin.appendChild(perfilUpdate);

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

function analisaCheckboxes(checK){
  var checK1 = document.getElementById(`${checK}`);
  var valor = checK1.getAttribute('checked')

  if(valor=="" ||valor=="checked"){
    valor = "on"
    checK1.setAttribute('checked','checked')
  }else if(valor==null){
    valor = "off"
    checK1.removeAttribute('checked')
  }
  console.log(valor)
  return valor
}

if (document.getElementById('btnSalvarConfigAdmin')){
  var btnSalvarConfigAdmin = document.getElementById('btnSalvarConfigAdmin');
  btnSalvarConfigAdmin.addEventListener('click',()=>{
    salvaPerfil()
  })  
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
    console.log("Perfil do usuário salvo!")
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
