function soma() {
var valor1  = parseInt(document.getElementById('a1').value);
var valor2  = parseInt(document.getElementById('a2').value);
var valor3  = parseInt(document.getElementById('a3').value);

document.getElementById('resul').value = ( valor1 + valor2 + valor3 );

}

function mult() {
    var valor4  = parseInt(document.getElementById('a4').value);
    var valor5 = parseInt(document.getElementById('a5').value);
    var valor6  = parseInt(document.getElementById('a6').value);
    
    document.getElementById('multi').value = (valor4 * valor5 * valor6);
    
    }

    function dividir() {
        var valor7  = parseInt(document.getElementById('a7').value);
        var valor8  = parseInt(document.getElementById('a8').value);
        var valor9  = parseInt(document.getElementById('a9').value);
        
        document.getElementById('divi').value = (valor7 / valor8 / valor9);
        
        }
        function sub() {
            var valor10 = parseInt(document.getElementById('a10').value);
            var valor11  = parseInt(document.getElementById('a11').value);
            var valor12  = parseInt(document.getElementById('a12').value);
            
            document.getElementById('subt').value = (valor10 - valor11 - valor12);
            
            }