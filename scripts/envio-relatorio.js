function abreEnvioRel(){ 
    var telaEnviarRelatorios = document.getElementById('EnviarRelatorios')
    telaEnviarRelatorios.setAttribute("class","aparente")

    var grupoRel = document.getElementById('grupoRel')
    var mesRel = document.getElementById('mesRel')
    var date = new Date
    var mesatual = `${date.getMonth}/${date.getFullYear}`
    console.log(mesatual)
    mesRel.value = mesatual

    grupoRel.onchange=function(){
        console.log(grupoRel.value)
        var nomeRel = document.getElementById('nomeRel')
        const refPublicadores = firebase.database().ref(`${localStorage.getItem("cong")}/Publicadores`);
        refRelatorios.child(grupoRel.value).get().then((snapshot)=>{
            console.log(snapshot.val())
            snapshot.forEach((childSnapshot) =>{
                var ValorNo1 = childSnapshot.val()
                var chave1 = childSnapshot.key
                
                var novoNome = document.createElement("option")
                novoNome.setAttribute('label', chave1 )
                nomeRel.appendChild(novoNome)
            });
        });

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