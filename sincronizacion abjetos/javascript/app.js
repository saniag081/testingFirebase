
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

    //obtener elementos
    const preObjetos = document.getElementById('objeto');
    const ulList = document.getElementById('lista');
    
    // crear referencia
    const dbRefObjetos = firebase.database().ref().child('objeto');
    const dbReList = dbRefObjetos.child('habilidaes');
    
    // sincronizar cambios objeto
    dbRefObjetos.on('value', snap => {
        preObjetos.innerText = JSON.stringify(snap.val(),null,3);        
    });
    
    // sicronizar cambios de lista

    dbReList.on('child_added', snap => {
        const li = document.createElement('li');
        li.innerText = snap.val()
        li.id = snap.key;
        ulList.appendChild(li);
    });

    dbReList.on('child_changed', snap => {

        const  liChanged = document.getElementById('snap.key');
        liChanged.innerText = snap.val();
    });

    dbReList.on('child_removed', snap => {

        const LiToRemove = document.getElementById('snap.key');
        LiToRemove.remove();
    }
)

} ());