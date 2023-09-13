const URL = "https://fakestoreapi.com/products";

document.addEventListener("DOMContentLoaded", async function (e) {
  data = await fetchData(URL);
  showProducts(data);
});

async function fetchData(url) {
  /*Función asincrónica que realiza una solicitud a una URL utilizando la función fetch() y await.
  Si ocurre algún error lo captura y lo registra en la consola. 
  Si no hay errores devuelve el array de productos obtenido.*/
  try {
    const respuesta = await fetch (URL);
    const productos = await respuesta.json();
    return productos 
    /* Hacer fetch y devolver array de productos (recordar usar await) */
  } catch (error) {
    // Log de eventual error
    console.log(error);
  }
}

function showProducts(productsData) {
 let commentshtml = document.getElementById("products")

  productsData.forEach( comment => {

   commentshtml.innerHTML += `<div class="products">
   <h2>${cutString(comment.title)}</h2>
   <p>${getCurrentDateTime()}` + ` - ` + `${stars(comment.rating.rate)} </p>
   <div/>`;
    
    
  });
  /*Función para mostrar productos en el div con id="products".
  Debe usar la función stars(), cutString() y getCurrentDateTime() para lograrlo */
}

function stars(cantidadStars) {

  let startsHTML = ``;
  for(let i=1; i<=5; i++){
    if(i<=cantidadStars){
      startsHTML += `<span class= "fa fa-star checked"></span>`
    }else{
      startsHTML += `<span class= "fa fa-star"></span>`
    }
  }
  return startsHTML
  /*Función que toma como entrada un número cantidadStars y devuelve 
  el html correspondiente a cinco estrellas con cantidadStars rellenas
  y el resto vacías */
}

function cutString(string) {
  if (string.length > 20) {
    string = string.substring(0, 20)+`...`;
  }

  return string
  /*Función que toma como entrada un string y y un número máximo de caracteres,
     y devuelve la cadena truncada a esa longitud si es más larga,
     seguida de tres puntos suspensivos ("...").*/
}

function getCurrentDateTime() {
  const d = new Date();
  return d.toLocaleString();
  /*función devuelve la fecha y hora actuales 
  en una string legible por humanos.*/
}
