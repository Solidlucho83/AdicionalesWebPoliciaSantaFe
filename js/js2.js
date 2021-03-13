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

function clic2() {       
        var servicio0 = document.getElementById("servicio0").value;
        var horas0 = document.getElementById("horas0").value;
        var Importe0= Math.round(parseFloat(servicio0)*parseFloat(horas0));
        
        document.getElementById('spTotal0').innerHTML = Importe0;
}

//////////////////////////////////////////////////////////////////////////////// 
function clic() {


            
            var servicio = document.getElementById("servicio").value;
            var horas = document.getElementById("horas").value;
            

            
            var Importe1= Math.round(parseFloat(servicio)*parseFloat(horas));
            
            
            document.getElementById('spTotal').innerHTML = Importe1;
////////////////////////////////////////////////////////////////////////////////////
            var servicio2 = document.getElementById("servicio2").value;
            var horas2 = document.getElementById("horas2").value;
            

            var importe2= Math.round(parseFloat(servicio2)*parseFloat(horas2));
            

            document.getElementById('spTotal2').innerHTML = importe2;

///////////////////////////////////////////////////////////////////////////////////
var servicio3 = document.getElementById("servicio3").value;
            var horas3 = document.getElementById("horas3").value;
            var importe3 = Math.round(parseFloat(servicio3)*parseFloat(horas3));    

            document.getElementById('spTotal3').innerHTML = importe3;

///////////////////////////////////////////////////////////////////////////////////
var servicio4 = document.getElementById("servicio4").value;
            var horas4 = document.getElementById("horas4").value;

            var importe4 = Math.round(parseFloat(servicio4)*parseFloat(horas4));
            

            document.getElementById('spTotal4').innerHTML = importe4;

///////////////////////////////////////////////////////////////////////////////////
var servicio5 = document.getElementById("servicio5").value;
            var horas5 = document.getElementById("horas5").value;
            

            var importe5 = Math.round(parseFloat(servicio5)*parseFloat(horas5));
            

            document.getElementById('spTotal5').innerHTML = importe5;

///////////////////////////////////////////////////////////////////////////////////
var servicio6 = document.getElementById("servicio6").value;
            var horas6 = document.getElementById("horas6").value;
            

            var importe6 = Math.round(parseFloat(servicio6)*parseFloat(horas6));
            

            document.getElementById('spTotal6').innerHTML = importe6;

///////////////////////////////////////////////////////////////////////////////////
var servicio7 = document.getElementById("servicio7").value;
            var horas7 = document.getElementById("horas7").value;
            

            var importe7 = Math.round(parseFloat(servicio7)*parseFloat(horas7));
            

            document.getElementById('spTotal7').innerHTML = importe7;

///////////////////////////////////////////////////////////////////////////////////
var servicio8 = document.getElementById("servicio8").value;
            var horas8 = document.getElementById("horas8").value;
           

            var importe8 = Math.round(parseFloat(servicio8)*parseFloat(horas8));
            

            document.getElementById('spTotal8').innerHTML = importe8;

///////////////////////////////////////////////////////////////////////////////////
var servicio9 = document.getElementById("servicio9").value;
            var horas9 = document.getElementById("horas9").value;
            

            var importe9 = Math.round(parseFloat(servicio9)*parseFloat(horas9));
            

            document.getElementById('spTotal9').innerHTML = importe9;

///////////////////////////////////////////////////////////////////////////////////
var servicio10 = document.getElementById("servicio10").value;
            var horas10 = document.getElementById("horas10").value;
            

            var importe10 = Math.round(parseFloat(servicio10)*parseFloat(horas10));
            

            document.getElementById('spTotal10').innerHTML = importe10;

///////////////////////////////////////////////////////////////////////////////////





var horastotal= parseFloat((document.getElementById("servicio").value))+parseFloat((document.getElementById("servicio2").value))+parseFloat((document.getElementById("servicio3").value))+parseFloat((document.getElementById("servicio4").value))+parseFloat((document.getElementById("servicio5").value))+parseFloat((document.getElementById("servicio6").value))+parseFloat((document.getElementById("servicio7").value))+parseFloat((document.getElementById("servicio8").value))+parseFloat((document.getElementById("servicio9").value))+parseFloat((document.getElementById("servicio10").value));                            
/*var final = Math.round((parseFloat(servicio)*parseFloat(horas))+(parseFloat(servicio2)*parseFloat(horas2)+(parseFloat(servicio3)*parseFloat(horas3)+(parseFloat(servicio4)*parseFloat(horas4)+(parseFloat(servicio5)*parseFloat(horas5)+(parseFloat(servicio6)*parseFloat(horas6)+(parseFloat(servicio7)*parseFloat(horas7)+(parseFloat(servicio8)*parseFloat(horas8)+(parseFloat(servicio9)*parseFloat(horas9)+(parseFloat(servicio10)*parseFloat(horas10);            */
var final = Importe1+importe2+importe3+importe4+importe5+importe6+importe7+importe8+importe9+importe10;
document.getElementById('final').innerHTML = final;
document.getElementById('horastotal').innerHTML = horastotal ;


}