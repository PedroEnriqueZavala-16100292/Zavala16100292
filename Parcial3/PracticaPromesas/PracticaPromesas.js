$('#btnPromesas').click(function()) {
let promesa = new Promise(function(resolve,reject){
    var solicitud = new XMLHttpRequest();
    solicitud.onreadystatechange = function(){
        if(solicitud.readyState == 4 && solicitud.status==200){
            resolve(solicitud.responseText);
        }};
        solicitud.open("GET","01_cargarArchivo.txt",true);
        solicitud.send();
});
};

promesa.then(value => document.getElementById("enca").innerHTML = value );