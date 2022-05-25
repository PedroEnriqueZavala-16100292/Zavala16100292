// $(document).ready(function() {

//     $('#btn1').click(function() {
//           $('#alerta1').show();
//     });

//     $('#btncloseAlert').click(function() {
//           $('#alerta1').hide();
//     });

//     $('#btn2').click(function() {
//           console.log("Click en boton 2, el nodal se dispara con atributos de datos de bootstrap");
//     });

//     $('#btn3').click(function() {
//       $('.modal-body p').text('Se disparo modal desde boton3');
//       $('#modal1').modal();
//     });

//     $('#btn4').click(function() {
//       $('.modal-body p').text('Se disparo modal desde boton4');
//       $('#modal1').modal();
//     });

//     $('#btn5').click(function() {
//         swal("Sweet Alert", "Presionaste el boton5", "success");
//     });

    // function pedirHeader() {
        $('#btnajax').click(function() { 
            var solicitud = new XMLHttpRequest();          //Crear objeto XMLHttpRequest
            
            solicitud.onreadystatechange = function() {   // En esta propiedad declaramos la funcion a ejecutar
                                                        // cuando cambie el status del objeto XMLHttpRequest
            
                if (solicitud.readyState == 4 && solicitud.status == 200) {                 // La respueta esta lista
                    document.getElementById("MyDiv").innerHTML = solicitud.responseText;  // La propiedad responseText tiene la respuesta en texto
            }};
            
            solicitud.open("GET", "01_cargarArchivo.txt", true);
            solicitud.send();
            
             });
    
            //  function iniciarHeader() {
            //     document.getElementById("MyDiv").innerHTML = "<h2>Este es un Header nivel 2<h2>"; 
            // }
    
// });