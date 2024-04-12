function fechaConsultaRelGrupo(){
    var ConsultarRelatoriosGrupo = document.getElementById('ConsultarRelatoriosGrupo')
    ConsultarRelatoriosGrupo.setAttribute("class","oculto")
  };

  function abreConsultaRelGrupo(){ 
    var ConsultarRelatoriosGrupo = document.getElementById('ConsultarRelatoriosGrupo')
    ConsultarRelatoriosGrupo.setAttribute("class","aparente")
   
};

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
// var targetAnterior;
listaPubs.addEventListener('click', (e)=>{
  // targetAnterior =e.target
  if (e.target.localName=="p"){
    //console.log("p ", e)
    // e.target.style.backgroundColor="red"
    nomeAtual = e.target.innerText
    nomePub.value = ""
    nomePub.value = nomeAtual
    consultaRelPublicador()
    //console.log(e.target.innerText)
  }else{
    //console.log("div ", e)
  }
  
})

function consultaRelPublicador(){

  // var contentConsRelGrupo = document.getElementById('contentConsRelGrupo')
  // var formConsultaRelGrupo = document.getElementById('formConsultaRelGrupo')
  var grupoCons = document.getElementById('grupo') 
  var anoCons = document.getElementById('anoServico')
  var mesCons="Novembro";
  var nomeCons;
  var listaPubs = document.getElementById('listaPubs')

  var nomePub = document.getElementById('nomePub')
  var dataNasPub = document.getElementById('dataNasPub')
  var mas = document.getElementById('mas')
  var fem = document.getElementById('fem')
  var inpDateBatismo = document.getElementById('inpDateBatismo')
  var oo = document.getElementById('oo')
  var un  = document.getElementById('un')
  var anc = document.getElementById('anc')
  var sm = document.getElementById('sm')
  var pr  = document.getElementById('pr')
  var pe  = document.getElementById('pe')
  var mc  = document.getElementById('mc')
  var aserv = document.getElementById('aserv')
  
  var pm9
  var eb9
  var pa9
  var h9
  var ob9
 

  console.log('mudou')

  // var refRelatorios = firebase.database().ref(`${localStorage.getItem("cong")}/Relatórios`).child(anoCons.value).child(mesCons).child(nomeAtual);
  var refPublicadores = firebase.database().ref(`${localStorage.getItem("cong")}/Publicadores`);

  refPublicadores.orderByChild("grupoPub").equalTo(grupoCons.value).once('value').then(snapshot=>{
    if (snapshot.exists()) {
      var dados = snapshot.val()
      console.log("dados: ", dados)
    }
  });

}