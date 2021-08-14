
function ShowSelected(){
    var cod = document.getElementById("lista").value; 
    var combo = document.getElementById("lista");
    var selected = combo.options[combo.selectedIndex].text;
    console.log(selected);

    if(selected=="Arepa huevo"){precio.value=3000;

    } else if(selected=="Pastel de yuca"){precio.value=1800;

    }
    else if(selected=="Empanada de pollo"){precio.value=1800;

    }
    else  if (selected=="Avena"){precio.value=2000;

    }
}

function mostrar() {
  var precio = document.getElementById("precio").value;
   var cantidad= document.getElementById("cantidad").value;
   var total= document.getElementById("total")
   var mitotal=precio*cantidad;
   total.value="$ "+mitotal+" ";

}




