function firebaseLoginLogoff(){

    var congregationNumber = document.getElementById('congregationNumber').value.toString()
    console.log("congregationNumber: ", congregationNumber)
    //var textNumber = congregationNumber.toString()
    
    //window.location.href+='#'+congregationNumber


    //Configurações do firebaseui
 var config={
    callbacks:{
        signInSucessWithAuthResult:function(authResult, redirectUrl){
            console.log("authResult: ", authResult)
            document.getElementById('firebaseui-auth-container').style.display = 'none';
            if(user){
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
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', config)
    console.log("Sistema iniciado")
    
}

 