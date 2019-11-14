'use strict';

//JQUERY
// $(document).ready(function(){
//     //Aquí va el codi de JQUERY

// });

$(function(){
    //Select div element
    //Change HTML text
    // document.getElementById("principal").innerHTML="Nou text";
    var elemento=$('#principal');
    elemento.html('<b>Nou</b> text de Jquery');
    // $('#principal').text('New text');

    // document.getElementById("principal").style.color='blue';

    $('#principal').css({
                        'color':'blue',
                        'font-size':'20px',
                        'font-family': 'Roboto,sans-serif'
                        });

   


});
