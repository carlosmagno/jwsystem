const btnLogin = document.getElementById("btn-login")
// const linkPainel = document.getElementById("link-painel")
// const BoxLogin = document.getElementById('box-login')
// const formLogin = document.getElementById('formLogin')

var displayName;
var email;
var emailVerified;
var photoURL;
var uid;
var phoneNumber;
var providerData;

initApp = function() {
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      
      console.log("Usuário logado", user)
      // if(linkPainel){
      //   linkPainel.style.display="block"
      //   btnLogin.innerText="SAIR"
      // }
      // if(formLogin){
      //   document.getElementById('firebaseui-auth').style.display = 'none';
      //   formLogin.style.display="none";
      // }

      // User is signed in.
      displayName = user.displayName;
      email = user.email;
      emailVerified = user.emailVerified;
      photoURL = user.photoURL;
      uid = user.uid;
      localStorage.setItem("UserID", uid)
      phoneNumber = user.phoneNumber;
      providerData = user.providerData;
      // exibeInfo();
      // user.getIdToken().then(function(accessToken) {
      //   document.getElementById('sign-in-status').textContent = 'Signed in';
      //   document.getElementById('sign-in').textContent = 'Sign out';
      //   document.getElementById('account-details').textContent = JSON.stringify({
      //     displayName: displayName,
      //     email: email,
      //     emailVerified: emailVerified,
      //     phoneNumber: phoneNumber,
      //     photoURL: photoURL,
      //     uid: uid,
      //     accessToken: accessToken,
      //     providerData: providerData
      //   }, null, '  ');
      // });
    } else {
      // linkPainel.style.display="none"
      btnLogin.innerText="LOGIN"
      // document.getElementById('firebaseui-auth').style.display = 'block';
      // User is signed out.
      // document.getElementById('sign-in-status').textContent = 'Signed out';
      // document.getElementById('sign-in').textContent = 'Sign in';
      // document.getElementById('account-details').textContent = 'null';
    }
  }, function(error) {
    console.log(error);
  });
};

function exibeInfo(){
  if(window.location.href.endsWith("meu-painel/")||window.location.href.endsWith("meu-painel/#")){
    // exibeMinhaConta()
    fotoE.setAttribute('src', photoURL);
    displayNameE.textContent ="Nome: " + displayName;
    emailE.innerText = email;
    uidUserE.innerText = uid;
  }

}

window.addEventListener('load', function() {
  initApp()
});
