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
              var num = n-nrelatorios
              console.log("falta(m) ",n-nrelatorios," enviar o relatório")
               //document.getElementById('msgrelatorios').innerText=`falta(m) ${num} enviar o relatório`
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
        //contentConsRelGrupo.innerHTML=''
      }

    }else{
      console.log("Não há dados neste nó, aguarde ...");
      contentConsRelGrupo.innerHTML=''
      // var grupoCons = formConsultaRelGrupo.grupoConsRelGrupo.value
      // var anoCons = formConsultaRelGrupo.anoConsReGrupo.value
      // var mesCons = formConsultaRelGrupo.mesConsRelGrupo.value
      alert("Não foram encontrados resultados para esta consulta!")
    }

  });

  /*
  refRelatorios.get().then((snapshot)=>{

    if (snapshot.exists()) {

      if(contentConsRelGrupo.innerHTML==''){
        var n=0;
        snapshot.forEach((childSnapshot) =>{
         var ValorNo = childSnapshot.val()
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
         var participou = document.createElement('td')
         var pAux = document.createElement('td')
         var estBib = document.createElement('td')
         var horas = document.createElement('td')
         var obs = document.createElement('td')

         celNome.innerText = ValorNo.inpuTnomeRel
         participou.innerText = ValorNo.participou
         pAux.innerText = ValorNo.pAux
         estBib.innerText = ValorNo.eb
         horas.innerText = ValorNo.horas
         obs.innerText = ValorNo.obs

         linhaCG.appendChild(celNome)
         linhaCG.appendChild(participou)
         linhaCG.appendChild(pAux)
         linhaCG.appendChild(estBib)
         linhaCG.appendChild(horas)
         linhaCG.appendChild(obs)
         contentConsRelGrupo.appendChild(linhaCG)
              

        });


      }else{
        console.log('Já esta exibindo a consulta')
      }

    }else{
      console.log("Não há dados neste nó, aguarde ...");
      contentConsRelGrupo.innerHTML=''
      // var grupoCons = formConsultaRelGrupo.grupoConsRelGrupo.value
      // var anoCons = formConsultaRelGrupo.anoConsReGrupo.value
      // var mesCons = formConsultaRelGrupo.mesConsRelGrupo.value
      alert("Não foram encontrados resultados para esta consulta!")
    }

  })
  */
}

function consultaRelPublicador(){

}