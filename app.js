
var getData = function () {
    var comentario = document.getElementById("comentario").value;/* obtener datos del boton de comentarios enviar*/
    document.getElementById("comentario").value = ""; /* me borra el contenido tan pronto doy enviar*/

    console.log(comentario)/*mostrar por consola */
}

