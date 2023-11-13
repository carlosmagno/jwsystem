
var messagemAuto = document.getElementById('messagemAuto')
var btnConfigAdmin = document.getElementById('btnConfigAdmin')
var areaAdmin = document.getElementById('areaAdmin')


function exibebtnConfigAdmin(){
    btnConfigAdmin.setAttribute('class', 'imgBarraSuperior aparente')
    btnConfigAdmin.addEventListener('click',exibeAreaAdmin() )
}

function exibeAreaAdmin(){
    areaAdmin.setAttribute('class', 'aparente')

}

function exibemessagemAuto(){

    messagemAuto.innerText= `Você está logado como ${email}`

}

