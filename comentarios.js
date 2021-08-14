    function Comentarios(comentario,action){
    this.action=action;
    this.comentario=comentario;
}
Comentarios.prototype.AddComentario = function(){
    console.log(this.comentario);
    
 $.ajax({
        type:"POST",
        url:this.action,
        data:{comentario: this.comentario},
        success:function(response){
        
            if (response == 1){
                alert("Datos insertados correctamente");
            }else{
                alert("no hay conexión");
            }
        }
    })
}
