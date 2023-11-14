


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
            });
        } else {
          console.log("Não há dados neste nó");
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
