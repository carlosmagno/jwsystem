/**
* firebase: objeto global
* database(): método para acesso ao realtime database
* .ref(): url em string para referencia do caminho do banco
* .set(): metodo que cria dados na url.  Substitui tudo o que estiver no nó.
* .push(): metodo que adiciona dados com uma chave automática utilizando datetime atual.
* .child(): metodo que acessa o nó filho passado como parametro.
*/

var NovoPublicador;
var Congregacao;
//Criando a referencia principal do banco de dados realtime do firebase para os dados que quero trabalhar
var ref = firebase.database().ref(`${localStorage.getItem("cong")}/Publicadores`);

function SalvarPublicador() {
    console.log("executandooo")
    var n = 0;
    ref.once('value').then(snapshot =>{
        console.log(snapshot.numChildren());  
        var n = snapshot.numChildren();
        n=n+1;
        capturaPublicador()
        console.log(NovoPublicador)
        firebase.database().ref(`${localStorage.getItem("cong")}/Publicadores/${NovoPublicador.grupoPub}/${NovoPublicador.nomePub}`).set(NovoPublicador)
        .then(
           console.log("Usuário cadastrado!")
        );
        document.getElementById("formRegPub").reset()
    });


};

var congregationNumber = document.getElementById('congregationNumber')

if(localStorage.getItem("cong")){
    congregationNumber.value =localStorage.getItem("cong") 
}
var url = window.location.href.split('#')
console.log(url[1])
function consultaBDCong(){
    var url = window.location.href.split('#')
    console.log(url[1])
}
//if (window.location.href.endsWith('#',1)){ //window.location.href+'cong#'+congregationNumber}
function salvarUsuario(){

}
// var  = document.getElementById('')
// var  = document.getElementById('')

// var  = document.getElementById('')

function perfilAcesso(){

    /**
     * Quando usuário for logado acessa o nó "Usuários/perfil" e verifica para cada módulo o nivel de acesso, exibindo apenas as divs correspondentes
     *   perfil{
     * 
     *      Modulo_Publicadores{
     *          Registro: "on" ou "off",
     *          Consulta: "on" ou "off",
     *      
     *      }
     * 
     *      Modulo_Relatórios{
     *          Registro:"on" ou "off",
     *          Consulta: "on" ou "off",
     *      
     *      }
     * 
     *      Modulo_Reuniões{
     *          Registro:"não" ou "editor",
     *          Consultas: "não" ou "leitor",
     *          Programação: "leitor" ou "editor", 
     *      
     *      } 
     *   }
       
     */

    //var perfil = 
}