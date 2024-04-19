var dados2;
var n=0;
var dados;
function imprimeTodos() {
    var intRegistro = document.getElementById('int-registro')
    var registro = document.getElementById('registro')
    intRegistro.setAttribute('class', 'oculto')

    refPublicadores.orderByChild("grupoPub").equalTo(grupoCons.value).once('value').then(snapshot=>{
        if (snapshot.exists()) {
          var dados12 = snapshot.val()
          //console.log("dados12: ", dados12)
          registro.innerHTML=""
          snapshot.forEach((childSnapshot) =>{
            //var  chave = childSnapshot.key 
            dados2=childSnapshot.val();
            nomeAtual = dados2.nomePub
            console.log(nomeAtual)
             //consultaRelPublicador2(nomeAtual) 
             
    n++

    var anoCons = document.getElementById('anoServico')
    // var horas = 0      
    

    var divRegistro= document.createElement('div')
    //var intregistro = document.createElement('div')
    //var titulo = document.createElement('h2')
    //var formReg = document.createElement('form')
    // console.log(typeof(dados2.nascimento))
    // console.log(typeof(dados2.batismo))
    console.log(n)

    var refRelatorios = firebase.database().ref(`${localStorage.getItem("cong")}/Relatórios`).child(anoCons.value);

    // formConsRegPub.sexo.value = dadosPublicador.sexo
    // formConsRegPub.esperanca.value = dadosPublicador.esperanca
    // formConsRegPub.PSvaroes.value = dadosPublicador.PSvaroes
    // formConsRegPub.PScampo.value = dadosPublicador.PScampo

   divRegistro.innerHTML=`
   <div id="int-registro">
   <h2>REGISTRO DE PUBLICADOR DE CONGREGAÇÃO</h2>
   <form id="formConsRegPub${n}">
       <p><span class="percent20">Nome: </span><input type="text" name="nomePub" id="nomePub${n}" value="${nomeAtual}"></p>
       <div>Data de Nascimento:<input type="date" name="dataNasPub" id="dataNasPub${n}" disabled value=${dados2.nascimento}>
           <div class="group2">
               <!-- <fieldset> -->
                   <input type="radio" name="sexo" id="mas" value="Masculino" disabled><label for="masculino" > Masculino</label>
                   <input type="radio" name="sexo" id="fem" value="Feminino" disabled><label for="feminino" > Feminino</label>
               <!-- </fieldset> -->
               <!-- <input type="checkbox" name="" id="mas"> Masculino
               <input type="checkbox" name="" id="fem"> Feminino -->
           </div>
       </div>
       <div>Data de Batismo:<input type="date" name="" id="inpDateBatismo" disabled value=${dados2.batismo}>
           <div class="group2">
               <!-- <fieldset> -->
                   <input type="radio" name="esperanca" id="oo" value="Outras ovelhas" disabled><label for="oo"> Outras ovelhas</label>
                   <input type="radio" name="esperanca" id="un" value="Ungido" disabled><label for="ungido"> Ungido</label>
               <!-- </fieldset> -->
               <!-- <input type="checkbox" name="" id="oo"> Outras Ovelhas
               <input type="checkbox" name="" id="un"> Ungido          -->
           </div>
       </div>
       <p>
           <!-- <fieldset> -->
               <input type="radio" name="PSvaroes" id="anc" value="Ancião" disabled><label for="anciao"> Ancião</label>
               <input type="radio" name="PSvaroes" id="sm" value="Servo ministerial" disabled><label for="servoministerial"> Servo Ministerial</label>
           <!-- </fieldset> -->
           <!-- <input type="checkbox" name="" id="anc" class="lineCheks"> Ancião 
           <input type="checkbox" name="" id="sm" class="lineCheks"> Servo ministerial  -->
           <!-- <fieldset> -->
               <input type="radio" name="PScampo" id="pr" value="Pioneiro regular" disabled><label for="pioneiroregular"> Pioneiro regular</label>
               <input type="radio" name="PScampo" id="pe" value="Pioneiro especial" disabled><label for="pioneiroespecial"> Pioneiro especial</label>
               <input type="radio" name="PScampo" id="mc" value="Missionário em campo" disabled><label for="missionarioemcampo"> Missionário em Campo</label>
           <!-- </fieldset> -->
           <!-- <input type="checkbox" name="" id="pr" class="lineCheks"> Pioneiro regular 
           <input type="checkbox" name="" id="pe" class="lineCheks"> Pioneiro especial 
           <input type="checkbox" name="" id="mc" class="lineCheks"> Missionário em campo  -->
       </p>
   </form>
   <table>
       <thead>
           <tr>
               <th><p>Ano de serviço</p> <input type="text" name="aserv" id="aserv" disabled></th>
               <th>Participou <p>no</p>  ministério</th>
               <th  class="colEB" scope="col">Estudos bíblicos</th>
               <th>Pioneiro auxiliar</th>
               <th>Horas <p id="small">(Se for pioneiro ou missionário em campo)</p></th>
               <th id="colObs"><span></span>   Observações   <span></span></th>

           </tr>
       </thead>
       <form action="" id="formAtividades">
       <tbody>
           <tr>
               <th>Setembro</th>
               <td><input type="checkbox" name="pm9" id="pm9${n}" class="checkDS" disabled></td>
               <td ><input type="number" name="eb9" id="eb9${n}" disabled></td>
               <td><input type="checkbox" name="pa9" id="pa9${n}" class="checkDS" disabled></td>
               <td><input type="number" name="h9" id="h9${n}"disabled></td>
               <td><input type="text" name="ob9" id="ob9${n}"disabled></td>
          </tr>
          
          <tr>
               <th>Outubro</th>
               <td><input type="checkbox" name="pm10" id="pm10${n}" class="checkDS"disabled></td>
               <td ><input type="number" name="eb10" id="eb10${n}" disabled></td>
               <td><input type="checkbox" name="pa10" id="pa10${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h10" id="h10${n}"disabled></td>
               <td><input type="text" name="ob10" id="ob10${n}"disabled></td>
           </tr>
          
          <tr>
               <th>Novembro</th>
               <td><input type="checkbox" name="pm11" id="pm11${n}" class="checkDS" disabled></td>
               <td ><input type="number" name="eb11" id="eb11${n}" disabled></td>
               <td><input type="checkbox" name="pa11" id="pa11${n}" class="checkDS" disabled></td>
               <td><input type="number" name="h11" id="h11${n}" disabled></td>
               <td><input type="text" name="ob11" id="ob11${n}" disabled></td>
          </tr>
          
          <tr>
               <th>Dezembro</th>
               <td><input type="checkbox" name="pm12" id="pm12${n}" class="checkDS"disabled></td>
               <td ><input type="number" name="eb12" id="eb12${n}" disabled></td>
               <td><input type="checkbox" name="pa12" id="pa12${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h12" id="h12${n}"disabled></td>
               <td><input type="text" name="ob12" id="ob12${n}"disabled></td>
          </tr>
          
          <tr>
               <th>Janeiro</th>
               <td><input type="checkbox" name="pm1" id="pm1${n}" class="checkDS"disabled></td>
               <td ><input type="number" name="eb1" id="eb1${n}" disabled></td>
               <td><input type="checkbox" name="pa1" id="pa1${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h1" id="h1${n}"disabled></td>
               <td><input type="text" name="ob1" id="ob1${n}"disabled></td>
          </tr>
          
          <tr>
               <th>Fevereiro</th>
               <td><input type="checkbox" name="pm2" id="pm2${n}" class="checkDS"disabled></td>
               <td ><input type="number" name="eb2" id="eb2${n}" disabled></td>
               <td><input type="checkbox" name="pa2" id="pa2${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h2" id="h2${n}"disabled></td>
               <td><input type="text" name="ob2" id="ob2${n}"disabled></td>
          </tr>
          
          <tr>
               <th>Março</th>
               <td><input type="checkbox" name="pm3" id="pm3${n}" class="checkDS"disabled></td>
               <td ><input type="number" name="eb3" id="eb3${n}" disabled></td>
               <td><input type="checkbox" name="pa3" id="pa3${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h3" id="h3${n}"disabled></td>
               <td><input type="text" name="ob3" id="ob3${n}"disabled></td>
          </tr>
          
          <tr>
               <th>Abril</th>
               <td><input type="checkbox" name="pm4" id="pm4${n}" class="checkDS"disabled></td>
               <td ><input type="number" name="eb4" id="eb4${n}" disabled></td>
               <td><input type="checkbox" name="pa4" id="pa4${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h4" id="h4${n}"disabled></td>
               <td><input type="text" name="ob4" id="ob4${n}"disabled></td>
          </tr>
          
          <tr>
               <th>Maio</th>
               <td><input type="checkbox" name="pm5" id="pm5${n}" class="checkDS"disabled></td>
               <td ><input type="number" name="eb5" id="eb5${n}" disabled></td>
               <td><input type="checkbox" name="pa5" id="pa5${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h5" id="h5${n}"disabled></td>
               <td><input type="text" name="ob5" id="ob5${n}"disabled></td>
          </tr>
          
          <tr>
               <th>Junho</th>
               <td><input type="checkbox" name="pm6" id="pm6${n}" class="checkDS"disabled></td>
               <td ><input type="number" name="eb6" id="eb6${n}" disabled></td>
               <td><input type="checkbox" name="pa6" id="pa6${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h6" id="h6${n}"disabled></td>
               <td><input type="text" name="ob6" id="ob6${n}"disabled></td>
          </tr>
          
          <tr>
               <th>Julho</th>
               <td><input type="checkbox" name="pm7" id="pm7${n}" class="checkDS"disabled></td>
               <td ><input type="number" name="eb7" id="eb7${n}" disabled></td>
               <td><input type="checkbox" name="pa7" id="pa7${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h7" id="h7${n}"disabled></td>
               <td><input type="text" name="ob7" id="ob7${n}"disabled></td>
          </tr>
          
           <tr>
               <th>Agosto</th>
               <td><input type="checkbox" name="pm8" id="pm8${n}" class="checkDS"disabled></td>
               <td><input type="number" name="eb8" id="eb8${n}" disabled></td>
               <td><input type="checkbox" name="pa8" id="pa8${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h8" id="h8${n}"disabled></td>
               <td><input type="text" name="ob8" id="ob8${n}"disabled></td>
           </tr>

           <tr>
               <td colspan="4" class="ofBorder"><span>Total</span></td>
               <td><input type="number" name="totalH" id="totalH${n}"disabled></td>
               <td><input type="text" name="totalOb" id="totalOb${n}"disabled></td>
           </tr>
       </tbody>
   </form>

   
   </table>
</div>
   `
    registro.appendChild(divRegistro)

    var pm9 = document.getElementById(`pm9${n}`); var eb9 = document.getElementById('eb9'+n); var pa9 = document.getElementById('pa9'+n); var h9 = document.getElementById('h9'+n); var ob9 = document.getElementById('ob9'+n)

    var pm10 = document.getElementById('pm10'+n); var eb10 = document.getElementById('eb10'+n); var pa10 = document.getElementById('pa10'+n); var h10 = document.getElementById('h10'+n); var ob10 = document.getElementById('ob10'+n)
    
    var pm11 = document.getElementById('pm11'+n); var eb11 = document.getElementById('eb11'+n); var pa11 = document.getElementById('pa11'+n); var h11 = document.getElementById('h11'+n); var ob11 = document.getElementById('ob11'+n)
  
    var pm12 = document.getElementById('pm12'+n); var eb12 = document.getElementById('eb12'+n); var pa12 = document.getElementById('pa12'+n); var h12 = document.getElementById('h12'+n); var ob12 = document.getElementById('ob12'+n)
  
    var pm1 = document.getElementById('pm1'+n); var eb1 = document.getElementById('eb1'+n); var pa1 = document.getElementById('pa1'+n); var h1 = document.getElementById('h1'+n); var ob1 = document.getElementById('ob1'+n)
  
    var pm2 = document.getElementById('pm2'+n); var eb2 = document.getElementById('eb2'+n); var pa2 = document.getElementById('pa2'+n); var h2 = document.getElementById('h2'+n); var ob2 = document.getElementById('ob2'+n)
  
    var pm3 = document.getElementById('pm3'+n); var eb3 = document.getElementById('eb3'+n); var pa3 = document.getElementById('pa3'+n); var h3 = document.getElementById('h3'+n); var ob3 = document.getElementById('ob3'+n)
  
    var pm4 = document.getElementById('pm4'+n); var eb4 = document.getElementById('eb4'+n); var pa4 = document.getElementById('pa4'+n); var h4 = document.getElementById('h4'+n); var ob4 = document.getElementById('ob4'+n)
  
    var pm5 = document.getElementById('pm5'+n); var eb5 = document.getElementById('eb5'+n); var pa5 = document.getElementById('pa5'+n); var h5 = document.getElementById('h5'+n); var ob5 = document.getElementById('ob5'+n)
  
    var pm6 = document.getElementById('pm6'+n); var eb6 = document.getElementById('eb6'+n); var pa6 = document.getElementById('pa6'+n); var h6 = document.getElementById('h6'+n); var ob6 = document.getElementById('ob6'+n)
  
    var pm7 = document.getElementById('pm7'+n); var eb7 = document.getElementById('eb7'+n); var pa7 = document.getElementById('pa7'+n); var h7 = document.getElementById('h7'+n); var ob7 = document.getElementById('ob7'+n)
  
    var pm8 = document.getElementById('pm8'+n); var eb8 = document.getElementById('eb8'+n); var pa8 = document.getElementById('pa8'+n); var h8 = document.getElementById('h8'+n); var ob8 = document.getElementById('ob8'+n)
    
    var totalH = document.getElementById('totalH'+n);
  
     /** Recupera relatórios do Publicador clicado na lista */
     //Laço de repetição 

     refRelatorios.once('value').then(snapshot=>{
        if (snapshot.exists()) {
          var checkDS = document.getElementsByClassName('checkDS')
          for(let item of checkDS ) {
            item.removeAttribute('checked')
         }
           console.log(snapshot.val())
           console.log(snapshot.key)
          var horas = 0
          
          snapshot.forEach((childSnapshot) =>{
  
            var  mes = childSnapshot.key
            dados = childSnapshot.val()
            //console.log(dados)
            // console.log(mes)
            var dadosPub = dados[nomeAtual]
            //console.log(dadosPub)
            horas+=Number(dadosPub.horas) 
            
            switch (mes){
              case 'Setembro':
                if(dadosPub){
                    if(dadosPub.participou=="sim"){
                        pm9.setAttribute('checked','checked' )
                    }
                    if(dadosPub.pAux=="sim"){
                        pa9.setAttribute('checked','checked' )
                    }
                    eb9.value=dadosPub.eb;  h9.value=dadosPub.horas; ob9.value=dadosPub.obs;
                }
                // pm9.removeAttribute('id')
                // pa9.removeAttribute('id')
                // eb9.removeAttribute('id')
                // h9.removeAttribute('id')
                // ob9.removeAttribute('id')
                
              break;
  
              case 'Outubro':
                if(dadosPub){
                    if(dadosPub.participou=="sim"){pm10.setAttribute('checked','checked' )}
                    if(dadosPub.pAux=="sim"){pa10.setAttribute('checked','checked' )}
                    eb10.value=dadosPub.eb;  h10.value=dadosPub.horas; ob10.value=dadosPub.obs;
                }
                // pm10.removeAttribute('id')
                // pa10.removeAttribute('id')
                // eb10.removeAttribute('id')
                // h10.removeAttribute('id')
                // ob10.removeAttribute('id')
                
              break;
  
              case 'Novembro':
                if(dadosPub){
                    if(dadosPub.participou=="sim"){pm11.setAttribute('checked','checked' )}
                    if(dadosPub.pAux=="sim"){pa11.setAttribute('checked','checked' )}
                    eb11.value=dadosPub.eb;  h11.value=dadosPub.horas; ob11.value=dadosPub.obs;
                }
                // pm11.removeAttribute('id')
                // pa11.removeAttribute('id')
                // eb11.removeAttribute('id')
                // h11.removeAttribute('id')
                // ob11.removeAttribute('id')
                
              break;
  
              case 'Dezembro':
                if(dadosPub){
                    if(dadosPub.participou=="sim"){pm12.setAttribute('checked','checked' )}
                    if(dadosPub.pAux=="sim"){pa12.setAttribute('checked','checked' )}
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

          });
        }else{
          console.log("não existe")
        }
     });
  
            dados=""
          });
          //window.print()
        }else{
          console.log("não existe")
        }
        n=0;
        dados2=""
     });



    
}

/*
function consultaRelPublicador2(x){
    n++
    var anoCons = document.getElementById('anoServico')
    // var horas = 0      
    

    var divRegistro= document.createElement('div')
    //var intregistro = document.createElement('div')
    //var titulo = document.createElement('h2')
    //var formReg = document.createElement('form')
    // console.log(typeof(dados2.nascimento))
    // console.log(typeof(dados2.batismo))
    console.log(n)

    var refRelatorios = firebase.database().ref(`${localStorage.getItem("cong")}/Relatórios`).child(anoCons.value);

    // formConsRegPub.sexo.value = dadosPublicador.sexo
    // formConsRegPub.esperanca.value = dadosPublicador.esperanca
    // formConsRegPub.PSvaroes.value = dadosPublicador.PSvaroes
    // formConsRegPub.PScampo.value = dadosPublicador.PScampo

   divRegistro.innerHTML=`
   <div id="int-registro">
   <h2>REGISTRO DE PUBLICADOR DE CONGREGAÇÃO</h2>
   <form id="formConsRegPub${n}">
       <p><span class="percent20">Nome: </span><input type="text" name="nomePub" id="nomePub${n}" value="${nomeAtual}"></p>
       <div>Data de Nascimento:<input type="date" name="dataNasPub" id="dataNasPub${n}" disabled value=${dados2.nascimento}>
           <div class="group2">
               <!-- <fieldset> -->
                   <input type="radio" name="sexo" id="mas" value="Masculino" disabled><label for="masculino" > Masculino</label>
                   <input type="radio" name="sexo" id="fem" value="Feminino" disabled><label for="feminino" > Feminino</label>
               <!-- </fieldset> -->
               <!-- <input type="checkbox" name="" id="mas"> Masculino
               <input type="checkbox" name="" id="fem"> Feminino -->
           </div>
       </div>
       <div>Data de Batismo:<input type="date" name="" id="inpDateBatismo" disabled value=${dados2.batismo}>
           <div class="group2">
               <!-- <fieldset> -->
                   <input type="radio" name="esperanca" id="oo" value="Outras ovelhas" disabled><label for="oo"> Outras ovelhas</label>
                   <input type="radio" name="esperanca" id="un" value="Ungido" disabled><label for="ungido"> Ungido</label>
               <!-- </fieldset> -->
               <!-- <input type="checkbox" name="" id="oo"> Outras Ovelhas
               <input type="checkbox" name="" id="un"> Ungido          -->
           </div>
       </div>
       <p>
           <!-- <fieldset> -->
               <input type="radio" name="PSvaroes" id="anc" value="Ancião" disabled><label for="anciao"> Ancião</label>
               <input type="radio" name="PSvaroes" id="sm" value="Servo ministerial" disabled><label for="servoministerial"> Servo Ministerial</label>
           <!-- </fieldset> -->
           <!-- <input type="checkbox" name="" id="anc" class="lineCheks"> Ancião 
           <input type="checkbox" name="" id="sm" class="lineCheks"> Servo ministerial  -->
           <!-- <fieldset> -->
               <input type="radio" name="PScampo" id="pr" value="Pioneiro regular" disabled><label for="pioneiroregular"> Pioneiro regular</label>
               <input type="radio" name="PScampo" id="pe" value="Pioneiro especial" disabled><label for="pioneiroespecial"> Pioneiro especial</label>
               <input type="radio" name="PScampo" id="mc" value="Missionário em campo" disabled><label for="missionarioemcampo"> Missionário em Campo</label>
           <!-- </fieldset> -->
           <!-- <input type="checkbox" name="" id="pr" class="lineCheks"> Pioneiro regular 
           <input type="checkbox" name="" id="pe" class="lineCheks"> Pioneiro especial 
           <input type="checkbox" name="" id="mc" class="lineCheks"> Missionário em campo  -->
       </p>
   </form>
   <table>
       <thead>
           <tr>
               <th><p>Ano de serviço</p> <input type="text" name="aserv" id="aserv" disabled></th>
               <th>Participou <p>no</p>  ministério</th>
               <th  class="colEB" scope="col">Estudos bíblicos</th>
               <th>Pioneiro auxiliar</th>
               <th>Horas <p id="small">(Se for pioneiro ou missionário em campo)</p></th>
               <th id="colObs"><span></span>   Observações   <span></span></th>

           </tr>
       </thead>
       <form action="" id="formAtividades">
       <tbody>
           <tr>
               <th>Setembro</th>
               <td><input type="checkbox" name="pm9" id="pm9${n}" class="checkDS" disabled></td>
               <td ><input type="number" name="eb9" id="eb9${n}" disabled></td>
               <td><input type="checkbox" name="pa9" id="pa9${n}" class="checkDS" disabled></td>
               <td><input type="number" name="h9" id="h9${n}"disabled></td>
               <td><input type="text" name="ob9" id="ob9${n}"disabled></td>
          </tr>
          
          <tr>
               <th>Outubro</th>
               <td><input type="checkbox" name="pm10" id="pm10${n}" class="checkDS"disabled></td>
               <td ><input type="number" name="eb10" id="eb10${n}" disabled></td>
               <td><input type="checkbox" name="pa10" id="pa10${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h10" id="h10${n}"disabled></td>
               <td><input type="text" name="ob10" id="ob10${n}"disabled></td>
           </tr>
          
          <tr>
               <th>Novembro</th>
               <td><input type="checkbox" name="pm11" id="pm11${n}" class="checkDS" disabled></td>
               <td ><input type="number" name="eb11" id="eb11${n}" disabled></td>
               <td><input type="checkbox" name="pa11" id="pa11${n}" class="checkDS" disabled></td>
               <td><input type="number" name="h11" id="h11${n}" disabled></td>
               <td><input type="text" name="ob11" id="ob11${n}" disabled></td>
          </tr>
          
          <tr>
               <th>Dezembro</th>
               <td><input type="checkbox" name="pm12" id="pm12${n}" class="checkDS"disabled></td>
               <td ><input type="number" name="eb12" id="eb12${n}" disabled></td>
               <td><input type="checkbox" name="pa12" id="pa12${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h12" id="h12${n}"disabled></td>
               <td><input type="text" name="ob12" id="ob12${n}"disabled></td>
          </tr>
          
          <tr>
               <th>Janeiro</th>
               <td><input type="checkbox" name="pm1" id="pm1${n}" class="checkDS"disabled></td>
               <td ><input type="number" name="eb1" id="eb1${n}" disabled></td>
               <td><input type="checkbox" name="pa1" id="pa1${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h1" id="h1${n}"disabled></td>
               <td><input type="text" name="ob1" id="ob1${n}"disabled></td>
          </tr>
          
          <tr>
               <th>Fevereiro</th>
               <td><input type="checkbox" name="pm2" id="pm2${n}" class="checkDS"disabled></td>
               <td ><input type="number" name="eb2" id="eb2${n}" disabled></td>
               <td><input type="checkbox" name="pa2" id="pa2${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h2" id="h2${n}"disabled></td>
               <td><input type="text" name="ob2" id="ob2${n}"disabled></td>
          </tr>
          
          <tr>
               <th>Março</th>
               <td><input type="checkbox" name="pm3" id="pm3${n}" class="checkDS"disabled></td>
               <td ><input type="number" name="eb3" id="eb3${n}" disabled></td>
               <td><input type="checkbox" name="pa3" id="pa3${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h3" id="h3${n}"disabled></td>
               <td><input type="text" name="ob3" id="ob3${n}"disabled></td>
          </tr>
          
          <tr>
               <th>Abril</th>
               <td><input type="checkbox" name="pm4" id="pm4${n}" class="checkDS"disabled></td>
               <td ><input type="number" name="eb4" id="eb4${n}" disabled></td>
               <td><input type="checkbox" name="pa4" id="pa4${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h4" id="h4${n}"disabled></td>
               <td><input type="text" name="ob4" id="ob4${n}"disabled></td>
          </tr>
          
          <tr>
               <th>Maio</th>
               <td><input type="checkbox" name="pm5" id="pm5${n}" class="checkDS"disabled></td>
               <td ><input type="number" name="eb5" id="eb5${n}" disabled></td>
               <td><input type="checkbox" name="pa5" id="pa5${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h5" id="h5${n}"disabled></td>
               <td><input type="text" name="ob5" id="ob5${n}"disabled></td>
          </tr>
          
          <tr>
               <th>Junho</th>
               <td><input type="checkbox" name="pm6" id="pm6${n}" class="checkDS"disabled></td>
               <td ><input type="number" name="eb6" id="eb6${n}" disabled></td>
               <td><input type="checkbox" name="pa6" id="pa6${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h6" id="h6${n}"disabled></td>
               <td><input type="text" name="ob6" id="ob6${n}"disabled></td>
          </tr>
          
          <tr>
               <th>Julho</th>
               <td><input type="checkbox" name="pm7" id="pm7${n}" class="checkDS"disabled></td>
               <td ><input type="number" name="eb7" id="eb7${n}" disabled></td>
               <td><input type="checkbox" name="pa7" id="pa7${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h7" id="h7${n}"disabled></td>
               <td><input type="text" name="ob7" id="ob7${n}"disabled></td>
          </tr>
          
           <tr>
               <th>Agosto</th>
               <td><input type="checkbox" name="pm8" id="pm8${n}" class="checkDS"disabled></td>
               <td><input type="number" name="eb8" id="eb8${n}" disabled></td>
               <td><input type="checkbox" name="pa8" id="pa8${n}" class="checkDS"disabled></td>
               <td><input type="number" name="h8" id="h8${n}"disabled></td>
               <td><input type="text" name="ob8" id="ob8${n}"disabled></td>
           </tr>

           <tr>
               <td colspan="4" class="ofBorder"><span>Total</span></td>
               <td><input type="number" name="totalH" id="totalH${n}"disabled></td>
               <td><input type="text" name="totalOb" id="totalOb${n}"disabled></td>
           </tr>
       </tbody>
   </form>

   
   </table>
</div>
   `
    registro.appendChild(divRegistro)

    var pm9 = document.getElementById(`pm9${n}`); var eb9 = document.getElementById('eb9'+n); var pa9 = document.getElementById('pa9'+n); var h9 = document.getElementById('h9'+n); var ob9 = document.getElementById('ob9'+n)

    var pm10 = document.getElementById('pm10'+n); var eb10 = document.getElementById('eb10'+n); var pa10 = document.getElementById('pa10'+n); var h10 = document.getElementById('h10'+n); var ob10 = document.getElementById('ob10'+n)
    
    var pm11 = document.getElementById('pm11'+n); var eb11 = document.getElementById('eb11'+n); var pa11 = document.getElementById('pa11'+n); var h11 = document.getElementById('h11'+n); var ob11 = document.getElementById('ob11'+n)
  
    var pm12 = document.getElementById('pm12'+n); var eb12 = document.getElementById('eb12'+n); var pa12 = document.getElementById('pa12'+n); var h12 = document.getElementById('h12'+n); var ob12 = document.getElementById('ob12'+n)
  
    var pm1 = document.getElementById('pm1'+n); var eb1 = document.getElementById('eb1'+n); var pa1 = document.getElementById('pa1'+n); var h1 = document.getElementById('h1'+n); var ob1 = document.getElementById('ob1'+n)
  
    var pm2 = document.getElementById('pm2'+n); var eb2 = document.getElementById('eb2'+n); var pa2 = document.getElementById('pa2'+n); var h2 = document.getElementById('h2'+n); var ob2 = document.getElementById('ob2'+n)
  
    var pm3 = document.getElementById('pm3'+n); var eb3 = document.getElementById('eb3'+n); var pa3 = document.getElementById('pa3'+n); var h3 = document.getElementById('h3'+n); var ob3 = document.getElementById('ob3'+n)
  
    var pm4 = document.getElementById('pm4'+n); var eb4 = document.getElementById('eb4'+n); var pa4 = document.getElementById('pa4'+n); var h4 = document.getElementById('h4'+n); var ob4 = document.getElementById('ob4'+n)
  
    var pm5 = document.getElementById('pm5'+n); var eb5 = document.getElementById('eb5'+n); var pa5 = document.getElementById('pa5'+n); var h5 = document.getElementById('h5'+n); var ob5 = document.getElementById('ob5'+n)
  
    var pm6 = document.getElementById('pm6'+n); var eb6 = document.getElementById('eb6'+n); var pa6 = document.getElementById('pa6'+n); var h6 = document.getElementById('h6'+n); var ob6 = document.getElementById('ob6'+n)
  
    var pm7 = document.getElementById('pm7'+n); var eb7 = document.getElementById('eb7'+n); var pa7 = document.getElementById('pa7'+n); var h7 = document.getElementById('h7'+n); var ob7 = document.getElementById('ob7'+n)
  
    var pm8 = document.getElementById('pm8'+n); var eb8 = document.getElementById('eb8'+n); var pa8 = document.getElementById('pa8'+n); var h8 = document.getElementById('h8'+n); var ob8 = document.getElementById('ob8'+n)
    
    var totalH = document.getElementById('totalH'+n);
  
     //Recupera relatórios do Publicador clicado na lista
     //Laço de repetição 

     refRelatorios.once('value').then(snapshot=>{
        if (snapshot.exists()) {
          var checkDS = document.getElementsByClassName('checkDS')
          for(let item of checkDS ) {
            item.removeAttribute('checked')
         }
           //console.log(snapshot.val())
          var horas = 0
          
          snapshot.forEach((childSnapshot) =>{
  
            var  mes = childSnapshot.key
            dados = childSnapshot.val()
            //console.log(dados)
            // console.log(mes)
            var dadosPub = dados[nomeAtual]
            console.log(dadosPub)
            horas+=Number(dadosPub.horas) 
            
            switch (mes){
              case 'Setembro':
                if(dadosPub){
                    if(dadosPub.participou=="sim"){
                        pm9.setAttribute('checked','checked' )
                    }
                    if(dadosPub.pAux=="sim"){
                        pa9.setAttribute('checked','checked' )
                    }
                    eb9.value=dadosPub.eb;  h9.value=dadosPub.horas; ob9.value=dadosPub.obs;
                }
                // pm9.removeAttribute('id')
                // pa9.removeAttribute('id')
                // eb9.removeAttribute('id')
                // h9.removeAttribute('id')
                // ob9.removeAttribute('id')
                
              break;
  
              case 'Outubro':
                if(dadosPub){
                    if(dadosPub.participou=="sim"){pm10.setAttribute('checked','checked' )}
                    if(dadosPub.pAux=="sim"){pa10.setAttribute('checked','checked' )}
                    eb10.value=dadosPub.eb;  h10.value=dadosPub.horas; ob10.value=dadosPub.obs;
                }
                // pm10.removeAttribute('id')
                // pa10.removeAttribute('id')
                // eb10.removeAttribute('id')
                // h10.removeAttribute('id')
                // ob10.removeAttribute('id')
                
              break;
  
              case 'Novembro':
                if(dadosPub){
                    if(dadosPub.participou=="sim"){pm11.setAttribute('checked','checked' )}
                    if(dadosPub.pAux=="sim"){pa11.setAttribute('checked','checked' )}
                    eb11.value=dadosPub.eb;  h11.value=dadosPub.horas; ob11.value=dadosPub.obs;
                }
                // pm11.removeAttribute('id')
                // pa11.removeAttribute('id')
                // eb11.removeAttribute('id')
                // h11.removeAttribute('id')
                // ob11.removeAttribute('id')
                
              break;
  
              case 'Dezembro':
                if(dadosPub){
                    if(dadosPub.participou=="sim"){pm12.setAttribute('checked','checked' )}
                    if(dadosPub.pAux=="sim"){pa12.setAttribute('checked','checked' )}
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

          });
        }else{
          console.log("não existe")
        }
     });
  
  
}

*/