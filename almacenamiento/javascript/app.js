(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDMKLdWS5tqAVPfOV9fvDV0gkzLEO6A74g",
        authDomain: "hola-mundo-f2508.firebaseapp.com",
        databaseURL: "https://hola-mundo-f2508.firebaseio.com",
        projectId: "hola-mundo-f2508",
        storageBucket: "hola-mundo-f2508.appspot.com",
        messagingSenderId: "1069285824837"
    };
    firebase.initializeApp(config);

    // obtener elemntos
    var progres = document.getElementById('uploader');

    var fileButtom = document.getElementById('fileButttom');

    // vigilar seleccion de archivo

    fileButtom.addEventListener('change', function (e) {

        // obtener archixo
        var file = e.target.files[0];

        // crear un storage ref
        var storageRef = firebase.storage().ref('mis_fotos/' + file.name);

        // subir archivo
        var task = storageRef.put(file);

        // actualizar barra de proceso
        task.on('state_changed',
            function progress(snapshot) {
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progres.value = percentage;
            },

            function error(err) {
                console.log('exitosa carga');
            },

            function complete() {
                console.log('error');
            }


        )

    })
})();