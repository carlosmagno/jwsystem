


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

var objetoUsers = {};
var userEmAlteracao;

function exibeAreaAdmin(evt){
    var areaAdmin = document.getElementById('areaAdmin')
    var formAdmin = document.getElementById('formAdmin')
    var btnSalvarConfigAdmin = document.getElementById('btnSalvarConfigAdmin');
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
          console.log(snapshot.val());

          var perfilUpdate = document.createElement('select')
          perfilUpdate.setAttribute('class', 'selectDinamica')

          if(dadosBDAdmin.innerHTML==''){

            snapshot.forEach((childSnapshot) =>{
              ValorNo = childSnapshot.val()
              chave = childSnapshot.key

              objetoUsers[`${chave}`]=ValorNo
  
              console.log(ValorNo)
              console.log(chave)
              console.log(objetoUsers[`${chave}`])
  
                  //var divNova = document.createElement("div");
                  var conteudoNovo = document.createTextNode(ValorNo.email);
                  //var nomeUsuario = ValorNo.displayName
                  

                  var opcao = document.createElement('option')
                  opcao.setAttribute("label", ValorNo.email)
                  opcao.setAttribute('value', chave)
                  opcao.appendChild(conteudoNovo)
                  perfilUpdate.appendChild(opcao)
                  spanNomeUsuario.innerText = ValorNo.email;

                  perfilUpdate.onchange=function(){
                    //console.log('evt.target: ', evt.target) 
                    console.log("value: ", this.value)
                    console.log("label: ", this.label)
                    var perfilExistente =  objetoUsers[`${this.value}`].perfil
                    spanNomeUsuario.innerText=""
                    spanNomeUsuario.innerText = perfilExistente.displayName;
                    userEmAlteracao = this.value

                    if(perfilExistente){
                      //perfilUpdate.value = perfilExistente
                      console.log('perfil existente: ', perfilExistente )
                      chkRegPublicadores.value = perfilExistente.chkRegPublicadores,
                      chkConPublicadores.value = perfilExistente.chkConPublicadores,
                      chkRegRelatorios.value = perfilExistente.chkRegRelatorios,
                      chkConRelatorios.value = perfilExistente.chkConRelatorios,
                      chkRegReunioes.value = perfilExistente.chkRegReunioes,
                      chkConReunioes.value = perfilExistente.chkConReunioes
                     }else{
                       console.log('ainda não existe perfil')
                     }

                  }
                 // perfilUpdate.innerHTML ='<option value="Leitor">Leitor</option><option value="Editor">Editor</option><option value="Admin">Admin</option>'



                  btnSalvarConfigAdmin.addEventListener('click',()=>{
                      var perfilBD ={
                          chkRegPublicadores: chkRegPublicadores.value,
                          chkConPublicadores: chkConPublicadores.value,
                          chkRegRelatorios: chkRegRelatorios.value,
                          chkConRelatorios: chkConRelatorios.value,
                          chkRegReunioes: chkRegReunioes.value,
                          chkConReunioes: chkConReunioes.value,
                        }
                      refUsuarios.child(userEmAlteracao).child("perfil").update(perfilBD)
                  })
                  
                  //divNova.appendChild(perfilUpdate); //adiciona o nó de texto à nova div criada
  
                  // adiciona o novo elemento criado e seu conteúdo ao DOM
                  
                  //dadosBDAdmin.insertAdjacentElement('afterbegin', perfilUpdate);
          
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
