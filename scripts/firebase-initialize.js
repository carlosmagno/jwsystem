  
    import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'

    // If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
    import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js'

    // Add Firebase products that you want to use
    import { getAuth } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'
    //import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDGuACh-tTZBcGnP9s8Eld_XwtI2UU6F0g",
    authDomain: "jw-system.firebaseapp.com",
    projectId: "jw-system",
    storageBucket: "jw-system.appspot.com",
    messagingSenderId: "554165912633",
    appId: "1:554165912633:web:48391e1a6a19d628e939e8",
    measurementId: "G-B3PYGYEL1Z"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);