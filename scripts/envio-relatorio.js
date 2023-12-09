function abreEnvioRel(){ 
    var telaEnviarRelatorios = document.getElementById('EnviarRelatorios')
    telaEnviarRelatorios.setAttribute("class","aparente")

    var grupoRel = document.getElementById('grupoRel')
    var mesRel = document.getElementById('mesRel')
    var anoRel = document.getElementById('anoRel')
    var date = new Date
    var mesatual = date.getMonth()+1
    var nomeMesAtual;
    var anoAtual;
        if(mesatual ==9||mesatual ==10||mesatual ==11||mesatual ==12){
            anoAtual=date.getFullYear()+1
            console.log(anoAtual)
            //return anoAtual
        }else{
            anoAtual=date.getFullYear()
        }
        
   

    console.log(mesatual)
    
    if(mesatual==1){nomeMesAtual="Janeiro"};if(mesatual==2){nomeMesAtual="Fevereiro"};if(mesatual==3){nomeMesAtual="Março"};
    if(mesatual==4){nomeMesAtual="Abril"};if(mesatual==5){nomeMesAtual="Maio"};;if(mesatual==6){nomeMesAtual="Junho"};
    if(mesatual==7){nomeMesAtual="Julho"};if(mesatual==8){nomeMesAtual="Agosto"};;if(mesatual==9){nomeMesAtual="Setembro"};
    if(mesatual==10){nomeMesAtual="Outubro"};if(mesatual==11){nomeMesAtual="Novembro"};;if(mesatual==12){nomeMesAtual="Dezembro"};

    mesRel.value = nomeMesAtual

    var ano = document.createElement('option')
    ano.setAttribute('value', anoAtual)
    ano.innerText=anoAtual

    var ano2 = document.createElement('option')
    ano2.setAttribute('value', anoAtual-1)
    ano2.innerText=anoAtual-1

    anoRel.appendChild(ano)
    anoRel.appendChild(ano2)


    grupoRel.onchange=function(){
        console.log(grupoRel.value)
       
        var nomeRel = document.getElementById('nomeRel')
        nomeRel.innerHTML="";
        const refPublicadores = firebase.database().ref(`${localStorage.getItem("cong")}/Publicadores`);

        //.orderByChild("grupoPub").equalTo(this.value).

        refPublicadores.orderByChild("grupoPub").equalTo(grupoRel.value).once('value').then(snapshot=>{
            // console.log(snapshot.val());
            // console.log(snapshot.key);
            console.log(snapshot.val())
            snapshot.forEach((childSnapshot) =>{
                var ValorNo1 = childSnapshot.val()
                var chave1 = childSnapshot.key

                console.log(ValorNo1)
                console.log(chave1)
                
                var novoNome = document.createElement("option")
                //novoNome.innerText= chave1
                novoNome.setAttribute('value', chave1 )
                nomeRel.appendChild(novoNome)
        
        });

        // refPublicadores.child(grupoRel.value).get().then((snapshot)=>{
        //     console.log(snapshot.val())
        //     snapshot.forEach((childSnapshot) =>{
        //         var ValorNo1 = childSnapshot.val()
        //         var chave1 = childSnapshot.key

        //         console.log(ValorNo1)
        //         console.log(chave1)
                
        //         var novoNome = document.createElement("option")
        //         //novoNome.innerText= chave1
        //         novoNome.setAttribute('value', chave1 )
        //         nomeRel.appendChild(novoNome)
        //     });
        // })
    });
};
};

function fechaEnvioRel(){ 
    var formRelatorio = document.getElementById('formRelatorio')
    formRelatorio.reset()
    formRelatorio.inpuTnomeRel.innerHTML=""
    var telaEnviarRelatorios = document.getElementById('EnviarRelatorios')
    telaEnviarRelatorios.setAttribute("class","oculto")

};


function capturaRelatorio(){
    var novoRelatorio={};
    var formRelatorio = document.getElementById('formRelatorio')
    // var grupoRel = formRelatorio.grupoRel.value// document.getElementById("grupoRel")
    var anoRel = formRelatorio.anoRel.value
    var mesRel = formRelatorio.mesRel.value //document.getElementById("mesRel")
    var inpuTnomeRel = formRelatorio.inpuTnomeRel.value //document.getElementById("nomeRel")
    var participou = formRelatorio.participou.value //document.getElementById("participou")
    var pAux = formRelatorio.pAux.value //document.getElementById("pAux")
    var eb = formRelatorio.eb.value //document.getElementById("EB")
    var horas = formRelatorio.horas.value //document.getElementById("horas")
    var obs = formRelatorio.obs.value //document.getElementById("obs")

    if(participou=="on"){
        participou="sim"
    }else{
        participou="não"
    };

    if(pAux=="on"){
        pAux="sim"
    }else{
        pAux=" "
    }

    novoRelatorio = {
        // grupoRel,
        anoRel,
        mesRel,
        inpuTnomeRel,
        participou,
        pAux,
        eb,
        horas,
        obs

    }
    return novoRelatorio
}