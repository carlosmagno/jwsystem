


var messagemAuto = document.getElementById('messagemAuto')


function exibebtnConfigAdmin(){
    var btnConfigAdmin = document.getElementById('btnConfigAdmin')
    btnConfigAdmin.setAttribute('class', 'imgBarraSuperior')
}

function exibeAreaAdmin(){
    var areaAdmin = document.getElementById('areaAdmin')
    areaAdmin.setAttribute('class', 'aparente')
    var refUsuarios = firebase.database().ref(`${localStorage.getItem("cong")}/Usuários`);
    refUsuarios.get().then((snapshot)=>{

        if (snapshot.exists()) {
          console.log(snapshot.val());
            snapshot.array.forEach(element => {
                console.log(element)

                
                var divNova = document.createElement("div");
                var conteudoNovo = document.createTextNode(element);
                var perfil = document.createElement('select')
                perfil.setAttribute('id', 'selectPerfilUser')
                perfil.innerHTML ='<option value="Leitor">Leitor</option><option value="Editor">Editor</option>'
                divNova.appendChild(conteudoNovo);
                divNova.appendChild(perfil); //adiciona o nó de texto à nova div criada

                // adiciona o novo elemento criado e seu conteúdo ao DOM
                var pAtual = document.getElementById("pTitulo");
                pAtual.insertAdjacentElement('afterend', divAtual);
                
            });
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
