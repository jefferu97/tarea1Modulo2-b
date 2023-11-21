//capturar valores 
let pagarBtn = document.getElementById("button");
const productos = document.getElementsByClassName("contenedor-productos");
let precioFinal=0;
let val1=0, val2=0, val3=0, val4=0;

function cobro(){
    precio = document.getElementById("precio").value;
    precioAux = parseInt(precio);
    
    console.log(precioAux);
    if(precioAux>=10000 && precioAux<=20000){
        precioFinal = precioAux - (precioAux*0.05);
        val1++;
        alert(`Precio con 5% de descuento es: ${precioFinal}`);
    }else  if(precioAux>=20001 && precioAux<=30000){
        precioFinal = precioAux - (precioAux*0.10);
        val2++;
        alert(`Precio con 10% de descuento es: ${precioFinal}`);
    }else  if(precioAux>=30001){
        precioFinal = precioAux - (precioAux*0.15);
        val3++;
        alert(`Precio con 15% de descuento es: ${precioFinal}`);
    }else{
        precioFinal=precioAux;
        val4++;
        alert(`Precio: ${precioFinal}`);
    }

    if(val1 > val2 && val1 > val3 && val1 > val4){
        alert("Mas vendida fue 5%");
    }else if(val2 > val1 && val2 > val3 && val2 > val4){
        alert("Mas vendida fue 10%");
    }else if(val3 > val1 && val3 > val2 && val3 > val4){
        alert("Mas vendida fue 15%");
    }else{
        alert("Mas vendida fue sin descuento");
    }

}
  

