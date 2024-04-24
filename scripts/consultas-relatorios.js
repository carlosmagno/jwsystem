function fechaConsultaRelGrupo(){
    var ConsultarRelatoriosGrupo = document.getElementById('ConsultarRelatoriosGrupo')
    ConsultarRelatoriosGrupo.setAttribute("class","oculto")
  };

  function abreConsultaRelGrupo(){ 
    var ConsultarRelatoriosGrupo = document.getElementById('ConsultarRelatoriosGrupo')
    ConsultarRelatoriosGrupo.setAttribute("class","aparente")
   
};

var btMenu = document.getElementById('btmenu')

btMenu.addEventListener('click', (e)=>{
  displayControles()
})

function displayControles(){
  if(document.getElementById('controles').style.display=='none'){
    document.getElementById('controles').style.display='block'
    document.getElementById('registro').style.display='none'
  }else{
    document.getElementById('controles').style.display='none'
    document.getElementById('registro').style.display='block'
  }
  console.log('cliquei')
}


function consultaRelGrupo(){
  var contentConsRelGrupo = document.getElementById('contentConsRelGrupo')
  var formConsultaRelGrupo = document.getElementById('formConsultaRelGrupo')
  var grupoCons = formConsultaRelGrupo.grupoConsRelGrupo.value
  var anoCons = formConsultaRelGrupo.anoConsReGrupo.value
  var mesCons = formConsultaRelGrupo.mesConsRelGrupo.value


  var refRelatorios = firebase.database().ref(`${localStorage.getItem("cong")}/Relatórios`).child(anoCons).child(mesCons);
  var refPublicadores = firebase.database().ref(`${localStorage.getItem("cong")}/Publicadores`);
  contentConsRelGrupo.innerHTML=''
  document.getElementById('msgrelatorios').innerText=""
  refPublicadores.orderByChild("grupoPub").equalTo(grupoCons).once('value').then(snapshot=>{
    if (snapshot.exists()) {
      var dados = snapshot.val()
      console.log("dados: ", dados)
      if(contentConsRelGrupo.innerHTML==''){
        var n=0;
        var nrelatorios=0;
        var num=0;
        /**
         * Para cada publicador vai procurar se existe o relatório
         */
        snapshot.forEach((childSnapshot) =>{
          
          var  chave = childSnapshot.key
 
          var linhaCG = document.createElement('tr')
          linhaCG.setAttribute('id', chave )
 
          if(n % 2 === 0) {
           //console.log("O número é par", n);
           linhaCG.setAttribute('class','tr2')
          }else{
            //console.log("O número é impar", n);
            linhaCG.setAttribute('class','tr3')
          }
          n+=1

        // var  chave = childSnapshot.key 
         var celNome = document.createElement('td')
         celNome.innerText = chave
         linhaCG.appendChild(celNome)

         refRelatorios.child(chave).get().then((snapshot)=>{
          if (snapshot.exists()) {
           
            var ValorNo = snapshot.val()
            var participou = document.createElement('td')
            var pAux = document.createElement('td')
            var estBib = document.createElement('td')
            var horas = document.createElement('td')
            var obs = document.createElement('td')

            participou.innerText = ValorNo.participou
            pAux.innerText = ValorNo.pAux
            estBib.innerText = ValorNo.eb
            horas.innerText = ValorNo.horas
            obs.innerText = ValorNo.obs

            linhaCG.appendChild(participou)
            linhaCG.appendChild(pAux)
            linhaCG.appendChild(estBib)
            linhaCG.appendChild(horas)
            linhaCG.appendChild(obs)
            nrelatorios+=1
            console.log("total de relatórios: ", nrelatorios)
            console.log("total de publicadores: ", n)
            if(nrelatorios<n){
              num = n-nrelatorios
              console.log("Falta(m) ",num," enviar o relatório!")
               document.getElementById('msgrelatorios').innerText=`Falta(m) ${num} enviar o relatório!`
            }if(nrelatorios==n){
              console.log("Todos os ",n," enviaram o relatório!")
              document.getElementById('msgrelatorios').innerText=`Todos os ${n} enviaram o relatório!`
            }

          }else{

          }
          
         });

         contentConsRelGrupo.appendChild(linhaCG)


        });

        console.log("total de publicadores: ", n)
        console.log("total de relatórios: ", nrelatorios)

      }else{
        console.log('Já esta exibindo a consulta')
      }

    }else{
      console.log("Não há dados neste nó, aguarde ...");
      contentConsRelGrupo.innerHTML=''
      alert("Não foram encontrados resultados para esta consulta!")
    }

  });

}


var listaPubs = document.getElementById('listaPubs')
var nomePub = document.getElementById('nomePub')
var nomeAtual;

var temp  = document.getElementById('registro').innerHTML
//var temp
// var targetAnterior;
listaPubs.addEventListener('click', (e)=>{
  document.getElementById('registro').innerHTML = temp
//temp = document.getElementById('registro').innerHTML
  // targetAnterior =e.target
  if (e.target.localName=="p"){
    //console.log("p ", e)
    // e.target.style.backgroundColor="red"
    nomeAtual = e.target.innerText
    // nomePub.value = ""
    // nomePub.value = nomeAtual
    consultaRelPublicador()
    console.log(e.target.innerText)
  }else{
    //console.log("div ", e)
  }
  
})
var grupoCons = document.getElementById('grupo')

var refPublicadores = firebase.database().ref(`${localStorage.getItem("cong")}/Publicadores`);

grupoCons.addEventListener('change',(e)=>{
  //console.log('grupo: ', grupoCons.value)
  listarPublicadores()
})
var arrayPublicadores =Array()
var arrayDadosPublicadores=Array()

function listarPublicadores(){
  arrayPublicadores=[]
  /** Recupera lista dos publicadores do grupo selecionado */
  refPublicadores.orderByChild("grupoPub").equalTo(grupoCons.value).once('value').then(snapshot=>{
    if (snapshot.exists()) {
      var dados = snapshot.val()
      //console.log("dados: ", dados)
      listaPubs.innerHTML=""
      snapshot.forEach((childSnapshot) =>{

        var  chave = childSnapshot.key
        var valor = childSnapshot.val()
        var pNome = document.createElement('p')
        pNome.innerText = chave
        listaPubs.appendChild(pNome)
        
        //arrayPublicadores[chave]=valor
        arrayPublicadores.push(valor)
        //arrayDadosPublicadores.push({chave:valor})
        // var dados = 
        // {
        //   chave:
        // }
      });
      //console.log(arrayPublicadores)
    }else{
      console.log("não existe")
    }
 });

}
var formConsRegPub = document.getElementById('formConsRegPub')
var formAtividades = document.getElementById('formAtividades')
function consultaRelPublicador(){
  // registro.innerHTML=""
  // intRegistro.setAttribute('class', 'aparente')
  // var contentConsRelGrupo = document.getElementById('contentConsRelGrupo')
  // var formConsultaRelGrupo = document.getElementById('formConsultaRelGrupo')


  //document.getElementById('registro').innerHTML=""
  // document.getElementById('registro').innerHTML = temp
  var anoCons = document.getElementById('anoServico')
  //var mesCons="Novembro";
  // var nomeCons;
  // var listaPubs = document.getElementById('listaPubs')

  
  //var nomePub = document.getElementById('nomePub')
  var dataNasPub = document.getElementById('dataNasPub')
  var mas = document.getElementById('mas')
  var fem = document.getElementById('fem')
  var inpDateBatismo = document.getElementById('inpDateBatismo')
  var oo = document.getElementById('oo')
  var un  = document.getElementById('un')
  var anc = document.getElementById('anc')
  var sm = document.getElementById('sm')
  var pr  = document.getElementById('pr'
)
  var pe  = document.getElementById('pe')
  var mc  = document.getElementById('mc')
  var aserv = document.getElementById('aserv')


  var pm9 = document.getElementById('pm9'); var eb9 = document.getElementById('eb9'); var pa9 = document.getElementById('pa9'); var h9 = document.getElementById('h9'); var ob9 = document.getElementById('ob9')

  var pm10 = document.getElementById('pm10'); var eb10 = document.getElementById('eb10'); var pa10 = document.getElementById('pa10'); var h10 = document.getElementById('h10'); var ob10 = document.getElementById('ob10')
  
  var pm11 = document.getElementById('pm11'); var eb11 = document.getElementById('eb11'); var pa11 = document.getElementById('pa11'); var h11 = document.getElementById('h11'); var ob11 = document.getElementById('ob11')

  var pm12 = document.getElementById('pm12'); var eb12 = document.getElementById('eb12'); var pa12 = document.getElementById('pa12'); var h12 = document.getElementById('h12'); var ob12 = document.getElementById('ob12')

  var pm1 = document.getElementById('pm1'); var eb1 = document.getElementById('eb1'); var pa1 = document.getElementById('pa1'); var h1 = document.getElementById('h1'); var ob1 = document.getElementById('ob1')

  var pm2 = document.getElementById('pm2'); var eb2 = document.getElementById('eb2'); var pa2 = document.getElementById('pa2'); var h2 = document.getElementById('h2'); var ob2 = document.getElementById('ob2')

  var pm3 = document.getElementById('pm3'); var eb3 = document.getElementById('eb3'); var pa3 = document.getElementById('pa3'); var h3 = document.getElementById('h3'); var ob3 = document.getElementById('ob3')

  var pm4 = document.getElementById('pm4'); var eb4 = document.getElementById('eb4'); var pa4 = document.getElementById('pa4'); var h4 = document.getElementById('h4'); var ob4 = document.getElementById('ob4')

  var pm5 = document.getElementById('pm5'); var eb5 = document.getElementById('eb5'); var pa5 = document.getElementById('pa5'); var h5 = document.getElementById('h5'); var ob5 = document.getElementById('ob5')

  var pm6 = document.getElementById('pm6'); var eb6 = document.getElementById('eb6'); var pa6 = document.getElementById('pa6'); var h6 = document.getElementById('h6'); var ob6 = document.getElementById('ob6')

  var pm7 = document.getElementById('pm7'); var eb7 = document.getElementById('eb7'); var pa7 = document.getElementById('pa7'); var h7 = document.getElementById('h7'); var ob7 = document.getElementById('ob7')

  var pm8 = document.getElementById('pm8'); var eb8 = document.getElementById('eb8'); var pa8 = document.getElementById('pa8'); var h8 = document.getElementById('h8'); var ob8 = document.getElementById('ob8')
  
  var totalH = document.getElementById('totalH');

//   for (var i = 1; i <= 12; i++) {
//     console.log(
// `<tr>
//      <th></td>
//      <td><input type="checkbox" name="pm${i}" id="pm${i}"></td>
//      <td ><input type="number" name="eb${i}" id="eb${i}" ></td>
//      <td><input type="checkbox" name="pa${i}" id="pa${i}"></td>
//      <td><input type="number" name="h${i}" id="h${i}"></td>
//      <td><input type="text" name="ob${i}" id="ob${i}"></td>
//  </tr>`
//     );

//   }

 

  console.log('mudou')

 
 
  
 

 /** Recupera dados do Publicador clicado na lista */
 
  refPublicadores.child(nomeAtual).once('value').then(snapshot=>{
    if (snapshot.exists()) {
      var formConsRegPub = document.getElementById('formConsRegPub')
      var dados = snapshot.val()
      console.log("dados: ", dados)
      var dadosPublicador = snapshot.val()
      //formConsRegPub.reset()
      // nomePub.value = ""
      formConsRegPub.nomePub.value = dadosPublicador.nomePub
      console.log( 'passei aqui', nomePub.value)
      dataNasPub.value = dadosPublicador.nascimento
      inpDateBatismo.value = dadosPublicador.batismo
      formConsRegPub.sexo.value = dadosPublicador.sexo
      formConsRegPub.esperanca.value = dadosPublicador.esperanca
      formConsRegPub.PSvaroes.value = dadosPublicador.PSvaroes
      formConsRegPub.PScampo.value = dadosPublicador.PScampo
      aserv.value = anoCons.value

    }else{
      console.log('não existe')
    }
  });
  /** ------------------------ */

   /** Recupera relatórios do Publicador clicado na lista */
   //orderByChild("grupoPub").equalTo(grupoCons.value)
   //orderByKey()
   var refRelatorios = firebase.database().ref(`${localStorage.getItem("cong")}/Relatórios`).child(anoCons.value);
   
   //Laço de repetição 
   refRelatorios.once('value').then(snapshot=>{
     
      if (snapshot.exists()) {
        // var dados = snapshot.val()
        // console.log("dados: ", dados)
        var checkDS = document.getElementsByClassName('checkDS')
        for(let item of checkDS ) {
          //console.log(item);
          item.removeAttribute('checked')
       }
          
        var horas = 0
        
        snapshot.forEach((childSnapshot) =>{

          var  mes = childSnapshot.key
          var dados = childSnapshot.val()
          if(dados[nomeAtual]){
            var dadosPub = dados[nomeAtual]
            horas+=Number(dadosPub.horas)
          }else{
           // alert("Sua consulta não retornou resultados")
           
          }
          
          // console.log(mes)
           //console.log(dados)
          // if(dadosPub.horas){
            
          // }
          
          //var mes
          switch (mes){
            case 'Setembro':
              //console.log(mes," , ",dadosPub.horas)
              if(dadosPub){
                  if(dadosPub.participou=="sim"){pm9.setAttribute('checked','checked' )}
                  if(dadosPub.pAux=="sim"){pa9.setAttribute('checked','checked' )}
                  // pm9.value=dadosPub; pa9.value=dadosPub;
                  eb9.value=dadosPub.eb;  h9.value=dadosPub.horas; ob9.value=dadosPub.obs;
              }
            break;

            case 'Outubro':
              //console.log(mes," , ",dadosPub.horas)
              if(dadosPub){
                  if(dadosPub.participou=="sim"){pm10.setAttribute('checked','checked' )}
                  if(dadosPub.pAux=="sim"){pa10.setAttribute('checked','checked' )}
                  // pm10.value=dadosPub; pa10.value=dadosPub;
                  eb10.value=dadosPub.eb;  h10.value=dadosPub.horas; ob10.value=dadosPub.obs;
              }
            break;

            case 'Novembro':
              //console.log(mes," , ",dadosPub.horas)
              if(dadosPub){
                  if(dadosPub.participou=="sim"){pm11.setAttribute('checked','checked' )}
                  if(dadosPub.pAux=="sim"){pa11.setAttribute('checked','checked' )}
                  // pm11.value=dadosPub; pa11.value=dadosPub;
                  eb11.value=dadosPub.eb;  h11.value=dadosPub.horas; ob11.value=dadosPub.obs;
              }
            break;

            case 'Dezembro':
              //console.log(mes," , ",dadosPub.horas)
              if(dadosPub){
                  if(dadosPub.participou=="sim"){pm12.setAttribute('checked','checked' )}
                  if(dadosPub.pAux=="sim"){pa12.setAttribute('checked','checked' )}
                  // pm12.value=dadosPub; pa12.value=dadosPub;
                  eb12.value=dadosPub.eb;  h12.value=dadosPub.horas; ob12.value=dadosPub.obs;
              }   
            break;

            case 'Janeiro':
              if(dadosPub){
              if(dadosPub.participou=="sim"){pm1.setAttribute('checked','checked' )}
              if(dadosPub.pAux=="sim"){pa1.setAttribute('checked','checked' )}
              eb1.value=dadosPub.eb;  h1.value=dadosPub.horas; ob1.value=dadosPub.obs;
              }
            break;

            case 'Fevereiro':
              if(dadosPub){
              if(dadosPub.participou=="sim"){pm2.setAttribute('checked','checked' )}
              if(dadosPub.pAux=="sim"){pa2.setAttribute('checked','checked' )}
              eb2.value=dadosPub.eb;  h2.value=dadosPub.horas; ob2.value=dadosPub.obs;
              }
            break;

            case 'Março':
              if(dadosPub){
              if(dadosPub.participou=="sim"){pm3.setAttribute('checked','checked' )}
              if(dadosPub.pAux=="sim"){pa3.setAttribute('checked','checked' )}
              eb3.value=dadosPub.eb;  h3.value=dadosPub.horas; ob3.value=dadosPub.obs;
              }
            break;

            case 'Abril':
              if(dadosPub){
              if(dadosPub.participou=="sim"){pm4.setAttribute('checked','checked' )}
              if(dadosPub.pAux=="sim"){pa4.setAttribute('checked','checked' )}
              eb4.value=dadosPub.eb;  h4.value=dadosPub.horas; ob4.value=dadosPub.obs;
              }
            break;

            case 'Maio':
              if(dadosPub){
              if(dadosPub.participou=="sim"){pm5.setAttribute('checked','checked' )}
              if(dadosPub.pAux=="sim"){pa5.setAttribute('checked','checked' )}
              eb5.value=dadosPub.eb;  h5.value=dadosPub.horas; ob5.value=dadosPub.obs;
              }
            break;

            case 'Junho':
              if(dadosPub){
              if(dadosPub.participou=="sim"){pm6.setAttribute('checked','checked' )}
              if(dadosPub.pAux=="sim"){pa6.setAttribute('checked','checked' )}
              eb6.value=dadosPub.eb;  h6.value=dadosPub.horas; ob6.value=dadosPub.obs;
              }
            break;

            case 'Julho':
              if(dadosPub){
              if(dadosPub.participou=="sim"){pm7.setAttribute('checked','checked' )}
              if(dadosPub.pAux=="sim"){pa7.setAttribute('checked','checked' )}
              eb7.value=dadosPub.eb;  h7.value=dadosPub.horas; ob7.value=dadosPub.obs;
              }
            break;

            case 'Agosto':
              if(dadosPub){
              if(dadosPub.participou=="sim"){pm8.setAttribute('checked','checked' )}
              if(dadosPub.pAux=="sim"){pa8.setAttribute('checked','checked' )}
              eb8.value=dadosPub.eb;  h8.value=dadosPub.horas; ob8.value=dadosPub.obs;
              }
            break;

          }
          totalH.value=horas
          // if(dados[nomeAtual].mesRel=="Setembro"){
          //   //console.log("as horas em Dezembro foram: ", dados[nomeAtual].horas)
          // }
          
          // do while(chave)
        });
        }else{
        console.log("Sua consulta não retornou resultados")
        alert("Sua consulta não retornou resultados")
        }
       
   });

   //.child(mesCons).child(nomeAtual)
    /** ------------------------ */

}