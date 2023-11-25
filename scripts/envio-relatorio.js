function abreEnvioRel(){ 
    var telaEnviarRelatorios = document.getElementById('EnviarRelatorios')
    telaEnviarRelatorios.setAttribute("class","aparente")

    var grupoRel = document.getElementById('grupoRel')
    var mesRel = document.getElementById('mesRel')
    var anoRel = document.getElementById('anoRel')
    var date = new Date
    var mesatual = date.getMonth()+1
    var anoAtual;
        if(date.getMonth()==9||date.getMonth()==10||date.getMonth()==11||date.getMonth()==12){
            anoAtual=date.getFullYear()+1
            console.log(anoAtual)
            //return anoAtual
        }
        
   

    console.log(mesatual)
    mesRel.value = mesatual

    var ano = document.createElement('option')
    ano.setAttribute('value', anoAtual)
    ano.innerText=anoAtual

    var ano2 = document.createElement('option')
    ano2.setAttribute('value', anoAtual+1)
    ano2.innerText=anoAtual+1

    anoRel.appendChild(ano)
    anoRel.appendChild(ano2)


    grupoRel.onchange=function(){
        console.log(grupoRel.value)
        var nomeRel = document.getElementById('nomeRel')
        const refPublicadores = firebase.database().ref(`${localStorage.getItem("cong")}/Publicadores`);
        refPublicadores.child(grupoRel.value).get().then((snapshot)=>{
            console.log(snapshot.val())
            snapshot.forEach((childSnapshot) =>{
                var ValorNo1 = childSnapshot.val()
                var chave1 = childSnapshot.key

                console.log(ValorNo1)
                console.log(chave1)
                
                var novoNome = document.createElement("option")
                novoNome.innerText= chave1
                novoNome.setAttribute('value', chave1 )
                nomeRel.appendChild(novoNome)
            });
        })
    }
};

function fechaEnvioRel(){ 
    var telaEnviarRelatorios = document.getElementById('EnviarRelatorios')
    telaEnviarRelatorios.setAttribute("class","oculto")
};

function capturaRelatorio(){
    
    var formRelatorio = document.getElementById('formRelatorio')
    var grupoRel = formRelatorio.grupoRel.value// document.getElementById("grupoRel")
    var mesRel = formRelatorio.mesRel.value //document.getElementById("mesRel")
    var nomeRel = formRelatorio.nomeRel.value //document.getElementById("nomeRel")
    var participou = formRelatorio.participou.value //document.getElementById("participou")
    var pAux = formRelatorio.pAux.value //document.getElementById("pAux")
    var eb = formRelatorio.eb.value //document.getElementById("EB")
    var horas = formRelatorio.horas.value //document.getElementById("horas")
    var obs = formRelatorio.obs.value //document.getElementById("obs")

    var novoRelatorio = {
        grupoRel,
        mesRel,
        nomeRel,
        participou,
        pAux,
        eb,
        horas,
        obs

    }
    return novoRelatorio
}