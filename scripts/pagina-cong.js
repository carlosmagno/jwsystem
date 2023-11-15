


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

function exibeAreaAdmin(){
    var areaAdmin = document.getElementById('areaAdmin')
    var formAdmin = document.getElementById('formAdmin')
    areaAdmin.setAttribute('class', 'aparente')
    var refUsuarios = firebase.database().ref(`${localStorage.getItem("cong")}/Usuários`);
    refUsuarios.get().then((snapshot)=>{

        if (snapshot.exists()) {
          console.log(snapshot.val());

          if(formAdmin.innerHTML=='<p id="pTitulo">Usuários da Congregação</p><div id="btnSalvarConfigAdmin" class="button"><b>Salvar alterações</b></div>'){

            snapshot.forEach((childSnapshot) =>{
              ValorNo = childSnapshot.val()
              chave = childSnapshot.key
  
              console.log(ValorNo)
              console.log(chave)
  
                  var divNova = document.createElement("div");
                  var conteudoNovo = document.createTextNode(ValorNo.email);
                  var perfil = document.createElement('select')
                  perfil.setAttribute('id', 'selectPerfilUser')
                  perfil.innerHTML ='<option value="Leitor">Leitor</option><option value="Editor">Editor</option>'
                  perfil.addEventListener('change',()=>{
                      var usuario ={
                          email,
                          displayName,
                          perfil:perfil.value
                        }
                      refUsuarios.child(uid).set(usuario)
                  })
                  divNova.appendChild(conteudoNovo);
                  divNova.appendChild(perfil); //adiciona o nó de texto à nova div criada
  
                  // adiciona o novo elemento criado e seu conteúdo ao DOM
                  var pAtual = document.getElementById("pTitulo");
                  pAtual.insertAdjacentElement('afterend', divNova);
          
            });
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
