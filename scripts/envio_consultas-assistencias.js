function abreEnvioAssistencia(){
    var EnviarAssistencia = document.getElementById('EnviarAssistencia')
    EnviarAssistencia.setAttribute("class","aparente")
}

function fechaEnvioAssistencia(){
    var EnviarAssistencia = document.getElementById('EnviarAssistencia')
    EnviarAssistencia.setAttribute("class","oculto")
}

function enviarAssistencia(){
    var refAssistencias = firebase.database().ref(`${localStorage.getItem("cong")}/Reuniões/Assistências`)
    var formAssistencia = document.getElementById('formAssistencia')

    var dataAss = formAssistencia.dataAssitencia.value
    var numAss = formAssistencia.numAssistencia.value
    //var mesAss = formAssistencia.mesConsAssistencia.value

    var data = new Date(dataAss)
    var mes = data.getMonth()+1
    var ano = data.getFullYear()
    var dataDate = data.getDate()+1
    var diaSemana = data.getDay()+1

    console.log('dataAss', dataAss)
    console.log('data', data)

    if(diaSemana==0){diaSemana="domingo"};if(diaSemana==1){diaSemana="segunda-feira"};if(diaSemana==2){diaSemana="terça-feira"};
    if(diaSemana==3){diaSemana="quarta-feira"};if(diaSemana==4){diaSemana="quinta-feira"};if(diaSemana==5){diaSemana="sexta-feira"};
    if(diaSemana==6){diaSemana="sábado"};

    console.log('diadasemana', diaSemana)
    console.log('dataDate', dataDate)

    var assistencia ={
        dataAss,
        numAss,
        diaSemana
    }

    refAssistencias.child(ano).child(mes).child(dataAss).set(assistencia).then(

    );
}

function consultarAssistencia(){
    var refAssistencias = firebase.database().ref(`${localStorage.getItem("cong")}/Reuniões/Assistências`)
    var formAssistencia = document.getElementById('formAssistencia')
    var contentConsAssistencia = document.getElementById('contentConsAssistencia')
    var ano = formAssistencia.anoConsAssistencia.value
    var mes = formAssistencia.mesConsAssistencia.value

    refAssistencias.child(ano).child(mes).get().then((snapshot)=>{
        if(snapshot.exists()){
            console.log("Resultado da consulta")
            
            //const matriz = [];
            contentConsAssistencia.innerHTML=""
            snapshot.forEach(function (childSnapshot){
                var valorNO =  childSnapshot.val()
                var nomePublicador = childSnapshot.key
                console.log(nomePublicador)
                console.log(valorNO)

                var tr = document.createElement('tr')

                var cDATA = document.createElement("td")
                cDATA.innerText = valorNO.dataAss

                var cDiaSemana = document.createElement('td')
                cDiaSemana.innerText = valorNO.diaSemana

                var cNumAss = document.createElement('td')
                cNumAss.innerText = valorNO.numAss

                tr.appendChild(cDATA)
                tr.appendChild(cDiaSemana)
                tr.appendChild(cNumAss)
                contentConsAssistencia.appendChild(tr)

    
            });
            

        }else{
            console.log("não há assistencia registrada para essa consulta")
            alert("Não há assistencia registrada para essa consulta")
        }

    });
}

