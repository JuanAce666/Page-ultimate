let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

  document.addEventListener('DOMContentLoaded', function () {
    const flickityOptions = {
      wrapAround: true,
      pageDots: true,
      autoPlay: true
    };
    
    const carrusel = document.querySelector('.gallery');
    const flickity = new Flickity(carrusel, flickityOptions);
  });