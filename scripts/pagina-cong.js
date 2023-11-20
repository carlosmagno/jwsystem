


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
          //console.log(snapshot.val());

          var perfilUpdate = document.createElement('select')
          perfilUpdate.setAttribute('class', 'selectDinamica')
            var opcao2 = document.createElement('option')
            opcao2.setAttribute("label", "")
            perfilUpdate.appendChild(opcao2)

          if(dadosBDAdmin.innerHTML==''){

            snapshot.forEach((childSnapshot) =>{
              ValorNo = childSnapshot.val()
              chave = childSnapshot.key

              objetoUsers[`${chave}`]=ValorNo
  
              //console.log(ValorNo)
              //console.log(chave)
              //console.log(objetoUsers[`${chave}`])
  
                  //var divNova = document.createElement("div");
                  var conteudoNovo = document.createTextNode(ValorNo.email);
                  //var nomeUsuario = ValorNo.displayName
                  

                  var opcao = document.createElement('option')
                  opcao.setAttribute("label", ValorNo.email)
                  opcao.setAttribute('value', chave)
                  opcao.appendChild(conteudoNovo)
                  perfilUpdate.appendChild(opcao)
                  //spanNomeUsuario.innerText = ValorNo.email;

                  perfilUpdate.onchange=function(){
                    //console.log('evt.target: ', evt.target) 
                    //console.log("value: ", this.value)
                    //console.log("label: ", this.label)
                    if(objetoUsers[`${this.value}`].perfil){
                      var perfilExistente =  objetoUsers[`${this.value}`].perfil
                      userEmAlteracao = this.value
                    }
                    
                   // spanNomeUsuario.innerText=""
                    //.innerText = perfilExistente.displayName;
                    
                      
                      chkRegPublicadores.removeAttribute("checked")
                      chkConPublicadores.removeAttribute("checked")
                      chkRegRelatorios.removeAttribute("checked")
                      chkConRelatorios.removeAttribute("checked")
                      chkRegReunioes.removeAttribute("checked")
                      chkConReunioes.removeAttribute("checked")
                      
                    if(perfilExistente){
                

                        
                      //perfilUpdate.value = perfilExistente
                      console.log('perfil existente: ', perfilExistente )
                      if(perfilExistente.chkRegPublicadores=="on"){chkRegPublicadores.setAttribute("checked","checked")}
                      if(perfilExistente.chkConPublicadores=="on") {chkConPublicadores.setAttribute("checked","checked")}
                      if(perfilExistente.chkRegRelatorios=="on") {chkRegRelatorios.setAttribute("checked","checked")}
                      if(perfilExistente.chkConRelatorios=="on") {chkConRelatorios.setAttribute("checked","checked")}        
                      if(perfilExistente.chkRegReunioes=="on") {chkRegReunioes.setAttribute("checked","checked")}
                      if(perfilExistente.chkConReunioes=="on") {chkConReunioes.setAttribute("checked","checked")}
                     }else{
                       console.log('ainda não existe perfil')
                     }

                  }
                 // perfilUpdate.innerHTML ='<option value="Leitor">Leitor</option><option value="Editor">Editor</option><option value="Admin">Admin</option>'


                // Saiu daqui o btnSalvarConfigAdmin.addEventListener

                  
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

function analisaCheckboxes(checK){
  var checK = document.getElementById(checK);
  var valor = checK.getAttribute('checked')

  if(valor=="" ||valor=="checked"){
    valor = "on"
    checK.removeAttribute('checked')
  }else if(valor==null){
    valor = "off"
    checK.setAttribute('checked','checked')
  }
  //alert(valor)
  return valor
}

function salvaPerfil(){

      /**
     *Elementos dos checkboxes
     */

    //  var chkRegPublicadores = document.getElementById('chkRegPublicadores');
    //  var chkConPublicadores = document.getElementById('chkConPublicadores');
    //  var chkRegRelatorios = document.getElementById('chkRegRelatorios');
    //  var chkConRelatorios = document.getElementById('chkConRelatorios');
    //  var chkRegReunioes = document.getElementById('chkRegReunioes');
    //  var chkConReunioes = document.getElementById('chkConReunioes');


// var valor = checK.getAttribute('checked')
//   if(valor=="" ||valor=="checked"){
//   valor = "on"
//   checK.removeAttribute('checked')
// }else if(valor==null){
//   valor = "off"
//   checK.setAttribute('checked','checked')
// }
// alert(valor)
var val1 = analisaCheckboxes(chkRegPublicadores)
var val2 = analisaCheckboxes(chkConPublicadores)
var val3 = analisaCheckboxes(chkRegRelatorios)
var val4 = analisaCheckboxes(chkConRelatorios)
var val5 = analisaCheckboxes(chkRegReunioes)
var val6 = analisaCheckboxes(chkConReunioes)


  btnSalvarConfigAdmin.addEventListener('click',()=>{
    var perfilBD ={
        chkRegPublicadores: val1,
        chkConPublicadores: val2,
        chkRegRelatorios: val3,
        chkConRelatorios: val4,
        chkRegReunioes: val5,
        chkConReunioes: val6,
      }
    refUsuarios.child(userEmAlteracao).child("perfil").update(perfilBD).then(
      alert("Perfil do usuário salvo!")
    )
    
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
