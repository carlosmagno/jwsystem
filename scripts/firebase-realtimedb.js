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
           console.log("Usuário cadastrado!"),
           alert("Usuário cadastrado!")
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

function salvarRelatorio(){

    var refRelatorios = firebase.database().ref(`${localStorage.getItem("cong")}/Relatórios`);
    var formRelatorio = document.getElementById('formRelatorio')
    //const btnEnviaRelatorio = document.getElementById("btnEnviaRelatorio")
    capturaRelatorio()
    console.log(novoRelatorio)
    //var mes = 
    refRelatorios.child(novoRelatorio.grupoRel).child(`${novoRelatorio.anoRel}/${novoRelatorio.mesRel}`).child(novoRelatorio.inpuTnomeRel).set(novoRelatorio)
    .then(
       console.log("Relatório enviado!"),
       alert("Relatório enviado!"),
       formRelatorio.inpuTnomeRel.value ="", //document.getElementById("nomeRel")
       formRelatorio.participou.value="", //document.getElementById("participou")
       formRelatorio.pAux.value="", //document.getElementById("pAux")
       formRelatorio.eb.value ="", //document.getElementById("EB")
       formRelatorio.horas.value="", //document.getElementById("horas")
       formRelatorio.obs.value="" //document.getElementById("obs")
    );
    // refRelatorios.once('value').then(snapshot =>{
    //     //console.log(snapshot.numChildren());  
    //     //var n = snapshot.numChildren();
    //     //n=n+1;

        
    // });
    


}
if(document.getElementById('grupoCampoCG')){
    var grupoCampoCG = document.getElementById('grupoCampoCG');
    var contentCG = document.getElementById('contentCG')

    grupoCampoCG.onchange=function(){
        var contentCG = document.getElementById('contentCG')
        //var contentDiv = document.getElementById('contentDiv')

        ///console.log(this.value)
       contentCG.innerHTML=""
       console.log("passei aqui")

        ref.child(this.value).once('value').then(snapshot=>{
           
            var n=0;
            //var parImpar;
            snapshot.forEach(function (childSnapshot){
                

               var valorNO =  childSnapshot.val()
               var nomePublicador = childSnapshot.key
              console.log(nomePublicador)
              console.log(valorNO)

              var linhaCG = document.createElement('tr')
              linhaCG.setAttribute('id', nomePublicador )

            if(n % 2 === 0) {
                console.log("O número é par", n);
                linhaCG.setAttribute('class','tr2')
            }else{
                console.log("O número é impar", n);
                linhaCG.setAttribute('class','tr3')
            }
            n+=1
              var celNome = document.createElement('td')
              var celNascimento = document.createElement('td')
              var celBatismo= document.createElement('td')
              var celSexo = document.createElement('td')
              var celEsperanca = document.createElement('td')
              var celPrivilegio = document.createElement('td')
              var celTempoIntegral = document.createElement('td')
              var celContatoEmg = document.createElement('td')

              celNome.innerText = valorNO.nomePub
              celNascimento.innerText = valorNO.nascimento
              celBatismo.innerText = valorNO.batismo
              celSexo.innerText = valorNO.sexo
              celEsperanca.innerText = valorNO.esperanca
              celPrivilegio.innerText = valorNO.PSvaroes
              celTempoIntegral.innerText = valorNO.PScampo
              celContatoEmg.innerText = valorNO.contatoEmg

              linhaCG.appendChild(celNome)
              linhaCG.appendChild(celNascimento)
              linhaCG.appendChild(celBatismo)
              linhaCG.appendChild(celSexo)
              linhaCG.appendChild(celEsperanca)
              linhaCG.appendChild(celPrivilegio)
              linhaCG.appendChild(celTempoIntegral)
              linhaCG.appendChild(celContatoEmg)

              contentCG.appendChild(linhaCG)

       
         });
        
        })
    }
}

// function consultaPublicadorGrupo(){

   

// }