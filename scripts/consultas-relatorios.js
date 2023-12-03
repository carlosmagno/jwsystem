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
          console.log("O número é par", n);
          linhaCG.setAttribute('class','tr2')
       }else{
          console.log("O número é impar", n);
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

}

function consultaRelPublicador(){

}