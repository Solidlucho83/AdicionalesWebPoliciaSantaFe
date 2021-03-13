$(function() {
 $( "#datepicker" ).datepicker();
});

$(function() {
 $( "#datepicker2" ).datepicker();
});
$(function() {
 $( "#datepicker3" ).datepicker();
});
$(function() {
 $( "#datepicker4" ).datepicker();
});
$(function() {
 $( "#datepicker5" ).datepicker();
});
$(function() {
 $( "#datepicker6" ).datepicker();
});
$(function() {
 $( "#datepicker7" ).datepicker();
});
$(function() {
 $( "#datepicker8" ).datepicker();
});
$(function() {
 $( "#datepicker9" ).datepicker();
});
$(function() {
 $( "#datepicker10" ).datepicker();
});  

$(document).ready(function(){
        $("#mostrar").on( "click", function() {
                $('#target').show(); //muestro mediante id
                $('.target').show(); //muestro mediante clase
         });
        $("#ocultar").on( "click", function() {
                $('#target').hide(); //oculto mediante id
                $('.target').hide(); //muestro mediante clase
        });
});


function limpiarFormulario() {
document.getElementById("presupuesto").reset();
document.getElementById('final').reset() ;
}

//////////////////////////////////////////////////////////////////////////////// 
function clic() {
            
            var servicio = document.getElementById("servicio").value;
            var horas = document.getElementById("horas").value;
            var efectivos = document.getElementById("efectivos").value;

            var previo1= parseFloat(servicio)*parseFloat(horas);
            var Importe1 = Math.round(previo1*parseFloat(efectivos));
            
            document.getElementById('spTotal').innerHTML = Importe1;
////////////////////////////////////////////////////////////////////////////////////
            var servicio2 = document.getElementById("servicio2").value;
            var horas2 = document.getElementById("horas2").value;
            var efectivos2 = document.getElementById("efectivos2").value;

            var previo2= parseFloat(servicio2)*parseFloat(horas2);
            var importe2 = Math.round(previo2*parseFloat(efectivos2));
            

            document.getElementById('spTotal2').innerHTML = importe2;

///////////////////////////////////////////////////////////////////////////////////
var servicio3 = document.getElementById("servicio3").value;
            var horas3 = document.getElementById("horas3").value;
            var efectivos3 = document.getElementById("efectivos3").value;

            var previo3= parseFloat(servicio3)*parseFloat(horas3);
            var importe3 = Math.round(previo3*parseFloat(efectivos3));
            

            document.getElementById('spTotal3').innerHTML = importe3;

///////////////////////////////////////////////////////////////////////////////////
var servicio4 = document.getElementById("servicio4").value;
            var horas4 = document.getElementById("horas4").value;
            var efectivos4 = document.getElementById("efectivos4").value;

            var previo4= parseFloat(servicio4)*parseFloat(horas4);
            var importe4 = Math.round(previo4*parseFloat(efectivos4));
            

            document.getElementById('spTotal4').innerHTML = importe4;

///////////////////////////////////////////////////////////////////////////////////
var servicio5 = document.getElementById("servicio5").value;
            var horas5 = document.getElementById("horas5").value;
            var efectivos5 = document.getElementById("efectivos5").value;

            var previo5= parseFloat(servicio5)*parseFloat(horas5);
            var importe5 = Math.round(previo5*parseFloat(efectivos5));
            

            document.getElementById('spTotal5').innerHTML = importe5;

///////////////////////////////////////////////////////////////////////////////////
var servicio6 = document.getElementById("servicio6").value;
            var horas6 = document.getElementById("horas6").value;
            var efectivos6 = document.getElementById("efectivos6").value;

            var previo6= parseFloat(servicio6)*parseFloat(horas6);
            var importe6 = Math.round(previo6*parseFloat(efectivos6));
            

            document.getElementById('spTotal6').innerHTML = importe6;

///////////////////////////////////////////////////////////////////////////////////
var servicio7 = document.getElementById("servicio7").value;
            var horas7 = document.getElementById("horas7").value;
            var efectivos7 = document.getElementById("efectivos7").value;

            var previo7= parseFloat(servicio7)*parseFloat(horas7);
            var importe7 = Math.round(previo7*parseFloat(efectivos7));
            

            document.getElementById('spTotal7').innerHTML = importe7;

///////////////////////////////////////////////////////////////////////////////////
var servicio8 = document.getElementById("servicio8").value;
            var horas8 = document.getElementById("horas8").value;
            var efectivos8 = document.getElementById("efectivos8").value;

            var previo8= parseFloat(servicio8)*parseFloat(horas8);
            var importe8 = Math.round(previo8*parseFloat(efectivos8));
            

            document.getElementById('spTotal8').innerHTML = importe8;

///////////////////////////////////////////////////////////////////////////////////
var servicio9 = document.getElementById("servicio9").value;
            var horas9 = document.getElementById("horas9").value;
            var efectivos9 = document.getElementById("efectivos9").value;

            var previo9= parseFloat(servicio9)*parseFloat(horas9);
            var importe9 = Math.round(previo9*parseFloat(efectivos9));
            

            document.getElementById('spTotal9').innerHTML = importe9;

///////////////////////////////////////////////////////////////////////////////////
var servicio10 = document.getElementById("servicio10").value;
            var horas10 = document.getElementById("horas10").value;
            var efectivos10 = document.getElementById("efectivos10").value;

            var previo10= parseFloat(servicio10)*parseFloat(horas10);
            var importe10 = Math.round(previo10*parseFloat(efectivos10));
            

            document.getElementById('spTotal10').innerHTML = importe10;

///////////////////////////////////////////////////////////////////////////////////

var horastotal= parseFloat((document.getElementById("servicio").value))+parseFloat((document.getElementById("servicio2").value))+parseFloat((document.getElementById("servicio3").value))+parseFloat((document.getElementById("servicio4").value))+parseFloat((document.getElementById("servicio5").value))+parseFloat((document.getElementById("servicio6").value))+parseFloat((document.getElementById("servicio7").value))+parseFloat((document.getElementById("servicio8").value))+parseFloat((document.getElementById("servicio9").value))+parseFloat((document.getElementById("servicio10").value));                            
var final = Math.round(previo1*parseFloat(efectivos))+(previo2*parseFloat(efectivos2))+(previo3*parseFloat(efectivos3))+(previo4*parseFloat(efectivos4))+(previo5*parseFloat(efectivos5))+(previo6*parseFloat(efectivos6))+(previo7*parseFloat(efectivos7))+(previo8*parseFloat(efectivos8))+(previo9*parseFloat(efectivos9))+(previo10*parseFloat(efectivos10));            

document.getElementById('final').innerHTML = final;
document.getElementById('horastotal').innerHTML = horastotal ;


}