/**
* firebase: objeto global
* database(): método para acesso ao realtime database
* .ref(): url em string para referencia do caminho do banco
* .set(): metodo que cria dados na url.  Substitui tudo o que estiver no nó.
* .push(): metodo que adiciona dados com uma chave automática utilizando datetime atual.
* .child(): metodo que acessa o nó filho passado como parametro.
*/


//Criando a referencia principal do banco de dados realtime do firebase para os dados que quero trabalhar
var ref = firebase.database().ref('Cursos');

function SalvarCurso() {
    var n = 0;
    ref.once('value').then(snapshot =>{
        console.log(snapshot.numChildren());  
        var n = snapshot.numChildren();
        n=n+1;
        
        var NovoCurso = {
            Professor: 'Antonio Abreu',
            Categoria:'Planilhas',
            TítuloCurso:'VBA Completo p/ Criação de Sistemas',
            DescriçãoCurso:'O melhor curso de VBA de todos os tempos. Completo p/ Criação de Poderosos Sistemas',
            Imagem:'https://',
        };
        
        firebase.database().ref('Cursos/' + NovoCurso.ID).set(NovoCurso);
    });


}

function InserirModulo() {
    //var cursos = ?; //Inserir aqui a variavel que vai pegar o nome do curso
    var n = 0;
    ref.once('value').then(snapshot =>{
        console.log(snapshot.numChildren());  
        var n = snapshot.numChildren();
        n=n+1;
        
        var NovoModulo = {
            IdModulo: n,
            TituloModulo: 'Módulo 01 - Descobrindo o VBA',
        };
        
        firebase.database().ref('Cursos/' + NovoModulo.ID).set(NovoModulo);
    });


}

function InserirAula() {
    //var cursos = ?; //Inserir aqui a variavel que vai pegar o nome do curso e/ou do módulo
    var n = 0;
    ref.once('value').then(snapshot =>{
        console.log(snapshot.numChildren());  
        var n = snapshot.numChildren();
        n=n+1;
        
        var NovaAula = {
            IdAula: n,
            TituloAula: 'Módulo 01 - Descobrindo o VBA',
            //LinkArquivo: 'https://',
            //Texto: 'skdmfgagaegemgfewfmmwefmewfqwepfwqpewepwpepfefwfe',
        };
        
        firebase.database().ref('Cursos/' + NovaAula.ID).set(NovaAula);
    });


}

function SalvarAula() {
    //var cursos = ?; //Inserir aqui a variavel que vai pegar o nome do curso e/ou do módulo
    var n = 0;
    ref.once('value').then(snapshot =>{
        console.log(snapshot.numChildren());  
        var n = snapshot.numChildren();
        n=n+1;
        
        var NovaAula = {
            IdAula: n,
            TituloAula: 'Módulo 01 - Descobrindo o VBA',
            LinkArquivo: 'https://',
            Texto: 'skdmfgagaegemgfewfmmwefmewfqwepfwqpewepwpepfefwfe',
        };
        
        firebase.database().ref('Cursos/' + NovaAula.ID).set(NovaAula);
    });


}