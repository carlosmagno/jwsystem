/**
* firebase: objeto global
* database(): método para acesso ao realtime database
* .ref(): url em string para referencia do caminho do banco
* .set(): metodo que cria dados na url.  Substitui tudo o que estiver no nó.
* .push(): metodo que adiciona dados com uma chave automática utilizando datetime atual.
* .child(): metodo que acessa o nó filho passado como parametro.
*/

var NovoPublicador;
//Criando a referencia principal do banco de dados realtime do firebase para os dados que quero trabalhar
var ref = firebase.database().ref('Publicadores');

function SalvarPublicador() {
    console.log("executandooo")
    var n = 0;
    ref.once('value').then(snapshot =>{
        console.log(snapshot.numChildren());  
        var n = snapshot.numChildren();
        n=n+1;
        
        capturaPublicador()
        // NovoPublicador = {
        //     Professor: 'Antonio Abreu',
        //     Categoria:'Planilhas',
        //     TítuloCurso:'VBA Completo p/ Criação de Sistemas',
        //     DescriçãoCurso:'O melhor curso de VBA de todos os tempos. Completo p/ Criação de Poderosos Sistemas',
        //     Imagem:'https://',
        // };
        
        firebase.database().ref('Publicadores/' + NovoPublicador.Professor).set(NovoPublicador);
    });


};


// var  = document.getElementById('')
// var  = document.getElementById('')

// var  = document.getElementById('')
