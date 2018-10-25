var button = document.getElementById('buttom');
var acceder = document.getElementById('acceder');

button.addEventListener('click', registrar);

acceder.addEventListener('click', ingreso);

function registrar() {
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, contrasena).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
    });
}

function ingreso() {
    var email2 = document.getElementById('email').value;
    var contrasena2 = document.getElementById('password').value;


    firebase.auth().signInWithEmailAndPassword(email2, contrasena2).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

(function() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log('si existe usuario');
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...
        } else {
            // User is signed out.
            console.log('no existe usuario');
            // ...
        }
    });
}());

