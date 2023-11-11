function firebaseLoginLogoff(){

    var congregationNumber = document.getElementById('congregationNumber').value.toString()
    console.log("congregationNumber: ", congregationNumber)
    localStorage.setItem("cong", congregationNumber)

    var refcong = firebase.database().ref().child(congregationNumber)
    //console.log(refcong)
    /**
    * once() retorna os dados lidos de uma URL
    * snapshot: objeto retornado pela leitura
    */
    if(document.getElementById('divCong ')){
        var a = divCong.getAttribute('class')
    }
   
    if(a=="aparente"){
        var formNovaContaCong = document.getElementById('formNovaContaCong')
        var NumCong = formNovaContaCong.NumCong.value
        var NomeCong = formNovaContaCong.NomeCong.value
        var Cidade = formNovaContaCong.Cidade.value
        var UF = formNovaContaCong.UF.value
        var NomeAdmin = formNovaContaCong.NomeAdmin.value
        var maior18 = formNovaContaCong.maior18.value
        var adminDesig = formNovaContaCong.adminDesig.value
        console.log( 'NomeCong', NomeCong)

        if(NumCong==""||NomeCong==""||Cidade==""){
            console.log("falta algo")
        }
        

     }else{
        console.log( 'none')
    }
    refcong.once('value').then(snapshot=>{
        var a = snapshot.exists()
        //var a = snapshot.child(congregationNumber)
        console.log(a)
        if(a==true) {

            // Initialize the FirebaseUI Widget using Firebase.
            var ui = new firebaseui.auth.AuthUI(firebase.auth());
            ui.start('#firebaseui-auth-container', config)
            console.log("Sistema iniciado")

        }else{
           // alert('A conta desta congregação não foi criada!')
            // Exibe o formulário para criar a conta da congregação
            document.getElementById('NovaContaCong').setAttribute("class", "aparente")

        }
        //console.log(snapshot.child())
        //console.log(snapshot.numChildren()); 
    //snapshot.forEach((childSnapshot) =>{
        //console.log(childSnapshot)
        //Aqui vai seu código se desejar usar o método de repetição forEach, por exemplo.
   // });
    }).catch (
        function() {
        console.log (error)
    
    });



    //Configurações do firebaseui
 var config={
    callbacks:{
        signInSucessWithAuthResult:function(authResult, redirectUrl){
            console.log("authResult: ", authResult)
            document.getElementById('firebaseui-auth-container').style.display = 'none';
            if(user){
                localStorage.setItem("user", user)
                console.log("usuario logado: ", user.displayName)
                
            }
            return false;
        }
    },
    //signInSuccessUrl: 'http://127.0.0.1:5500/userarea.html',
    signInSuccessUrl: window.location.href+'cong#'+congregationNumber,
    signInOptions:[
        {
            provider:firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true
        },
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,


    ],
    signInFlow:'popup',
     // Terms of service url.
    tosUrl: 'https://www.infonunes.com/como-limpar-o-cooler-do-dell-vostro/',
    privacyPolicyUrl: 'https://www.infonunes.com/como-limpar-o-cooler-do-dell-vostro/'
};

    // Initialize the FirebaseUI Widget using Firebase.

    // var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // ui.start('#firebaseui-auth-container', config)
    // console.log("Sistema iniciado")
    
}

function teste(){
    
    var divCong = document.getElementById('NovaContaCong')
    console.log(divCong)
    var a = divCong.getAttribute('class')
    if(a=="aparente"){

        console.log( 'block')

    }else {
        console.log( 'none')
    }

}


function sumir(){
    var boxlogin = document.getElementById('boxlogin')
    boxlogin.style.display="none"
}

function fechaCadastroCong(){ 
    var NovaContaCong = document.getElementById('NovaContaCong')
    NovaContaCong.setAttribute("class","oculto")
};
 