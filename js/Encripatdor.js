function Encriptar(){
    
    var texto = document.getElementById("base").value;
    var mensaje = document.getElementById("mensaje");
    var resultado = "";
    var valorchar = 0;
    var caracter = "";

    for (var i=0; i<texto.length; i++){
        valorchar = texto.charCodeAt(i);
        caracter = texto.charAt(i);
        if((valorchar<97||valorchar>122)&&valorchar!=32&&valorchar!=241){
            mensaje.innerHTML = "Solo se aceptan letras minusculas sin acentos"
        }
        else{
            switch (caracter){
                case 'a':
                    resultado += "ai";
                    break;
                case 'e':
                    resultado += "enter";
                    break;
                case 'i':
                    resultado += "imes";
                    break;
                case 'o':
                    resultado += "ober";
                    break;
                case 'u':
                    resultado += "ufat";
                    break;
                default:
                    resultado += caracter;
            }
                
        }
        
    }

    document.getElementById("resultado").value = resultado;
    
}


function CopiarTexto(){
    var input = document.getElementById("resultado");
    var mensaje = document.getElementById("mensajecopia");
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value);
    mensaje.innerHTML = "Texto copiado!"
}