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

      exibemessagemAuto();
      
      var congregationNumber = document.getElementById('congregationNumber').value.toString()
      var refAdmincong = firebase.database().ref(congregationNumber).child('Congregação').child('emailAdmin')
     
    
      refAdmincong.get().then((snapshot)=>{

        if (snapshot.exists()) {
          
          if(email ==snapshot.val()){
            exibebtnConfigAdmin()
            console.log(snapshot.val(), " Usuário admin logado. Prosseguir aqui!")
           
          }else{
            ocultabtnConfigAdmin()
            console.log('Usuário não admin logado')
          }


        } else {
          console.log("Ainda não existe usuário Admin");
          
        }
    
    });

    var refUser = firebase.database().ref(congregationNumber).child('Usuários').child(uid)
    refUser.get().then((snapshot)=>{

      if(snapshot.exists()){
        var h3PubReg = document.getElementById('h3PubReg')
        var h3PubConG = document.getElementById('h3PubConG')
        var h3PubCongI = document.getElementById('h3PubCongI')
        var h3RelReg = document.getElementById('h3RelReg')
        var h3RelConG = document.getElementById('h3RelConG')
        var h3RelConI = document.getElementById('h3RelConI')
        var h3ReuReg = document.getElementById('h3ReuReg')
        var h3ReuCons = document.getElementById('h3ReuCons')
        console.log("Nó do usuário criado no BD.")
        var valor = snapshot.val()
        if(valor.chkRegPublicadores=="on"){
          h3PubReg.setAttribute('class', "")
        }
        if(valor.chkConPublicadores=="on"){
          h3PubConG.setAttribute('class', "")
          h3PubCongI.setAttribute('class', "")
        }
        if(valor.chkRegRelatorios=="on"){
          h3RelReg.setAttribute('class', "")
        }
        if(valor.chkConRelatorios=="on"){
          h3RelConG.setAttribute('class', "")
          h3RelConI.setAttribute('class', "")
        }
        if(valor.chkRegReunioes=="on"){
          h3ReuReg.setAttribute('class', "")
        }
        if(valor.chkConReunioes=="on"){
          h3ReuCons.setAttribute('class', "")
        }
      }else{
        var usuario = {
          displayName,
          email,
          perfil: {
            chkRegPublicadores:"off",
            chkConPublicadores: "off",
            chkRegRelatorios: "off",
            chkConRelatorios: "off",
            chkRegReunioes: "off",
            chkConReunioes: "off",
          }
        }
        refUser.set(usuario);
      }

    });
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
     window.location.href="../"

      // linkPainel.style.display="none"
      //btnLogin.innerText="LOGIN"
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

// function exibeInfo(){
//   if(window.location.href.endsWith("meu-painel/")||window.location.href.endsWith("meu-painel/#")){
//     // exibeMinhaConta()
//     fotoE.setAttribute('src', photoURL);
//     displayNameE.textContent ="Nome: " + displayName;
//     emailE.innerText = email;
//     uidUserE.innerText = uid;
//   }

// }

window.addEventListener('load', function() {
  initApp()
});


function cadastraAdmin(){

  var congregationNumber = document.getElementById('congregationNumber').value.toString()
  var refAdmincong = firebase.database().ref().child(congregationNumber).child('Congregação').child('emailAdmin')

  refAdmincong.once('value').then(snapshot=>{

    snapshot.forEach(function (childSnapshot){
      console.log(childSnapshot.key)
      console.log(childSnapshot.val())
      if( email ==childSnapshot.val()){
        console.log("Usuário admin logado. Prosseguir aqui!")
      }
    });
    //var a = snapshot.exists()
    //var a = snapshot.child(congregationNumber)
    //console.log('tem snapshot?',a)

}).catch (
    function() {
    console.log (error)

});

  // var usuario ={
  //     NomeAdmin,
  //     emailAdmin,
  //     perfil:'Admin'
  // }

  // firebase.database().ref(`${NumCong}/Usuários/${emailAdmin}`).set(usuario)
  //     .then(
  //     console.log("Usuário cadastrado no BD!"),

  //     ).catch(

  // )

};