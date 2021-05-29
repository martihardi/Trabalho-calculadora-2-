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