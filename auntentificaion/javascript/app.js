(function() {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyDMKLdWS5tqAVPfOV9fvDV0gkzLEO6A74g",
        authDomain: "hola-mundo-f2508.firebaseapp.com",
        databaseURL: "https://hola-mundo-f2508.firebaseio.com",
        projectId: "hola-mundo-f2508",
        storageBucket: "hola-mundo-f2508.appspot.com",
        messagingSenderId: "1069285824837"
    };
    firebase.initializeApp(config);

    const texEmail = document.getElementById('texEmail');
    const password = document.getElementById('texPassword')
    const buttomLogin = document.getElementById('bntLogin');
    const buttonRegistro = document.getElementById('bntSingUp');
    const buttonLogout = document.getElementById('bntLogout');

    // añadir evento login
    buttomLogin.addEventListener('click', e => {
        // obtener email y pass
        const email = texEmail.value;
        const pass = password.value;
        const auth = firebase.auth();
        // sing  in
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e =>{console.log(e.message)});

    });

    // anadir registro
    buttonRegistro.addEventListener('click', e =>{
        // obtener email y pass
        // comprobar si el email es real
        const email = texEmail.value;
        const pass = password.value;
        const auth = firebase.auth();
        // sing in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    buttonLogout.addEventListener('click', e=>{
        firebase.auth().signOut();
    });

    // añadir listener en tiempo real
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            buttonLogout.classList.remove('hide');
        }else{
            console.log('no logeado');
            buttonLogout.classList.add('hide');
        }
    });
}());