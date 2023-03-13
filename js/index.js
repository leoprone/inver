
//import{presionar} from "./frio.js"





/* ********** Menu ********** */

/*función anónima autoejecutable*/



((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu");
  
  
    $btnMenu.addEventListener('click', (e) => {
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    });
  /*esconder el menu cuando ya se seleccionó una sección
   (por delegación de eventos, asignando el click a un
    elem. de nivel superior, en este caso, el document)*/ 
  d.addEventListener("click", (e) => {
      if (!e.target.matches(".menu a")) return false;/*no pasa nada ahí*/
  
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    });
  })(document);
  
  
  //BOTON ABRIR TAPAS DISCOS (index.html)
  
  
  const $abrirgrtapa=document.getElementById("abrir-gr-tapa"),
  $abririnfinito2=document.getElementById("abrir-infinito2"),
  $abririnfinito1=document.getElementById("abrir-infinito1"),
  $abrir3=document.getElementById("abrir-3"),
  $abrirdiaslime=document.getElementById("abrir-dias-lime"),
  $abrirtouchfelino=document.getElementById("abrir-touch-felino");
  
  
  
  //BOTÓN VIDEO FRÍO (frio.html)
  
   
  
  
  const $btnvideofrio=document.getElementById("btn-video-frio"),
  
  $videofrio=document.getElementById("video-frio");
  
  
  
  
  
  
  
  
  
  
  
  
  document.addEventListener("click", (e)=>{
  
          //abrir tapas discos (index.html)
  
         if(e.target.matches(".btn-abrir-gr")){
         $abrirgrtapa.classList.toggle("running");
         
           }
  
         if(e.target.matches(".btn-abrir-inf2")){
           $abririnfinito2.classList.toggle("running");
           
         }
  
         if(e.target.matches(".btn-abrir-inf1")){
          $abririnfinito1.classList.toggle("running");
          
        }
  
        if(e.target.matches(".btn-abrir-touch-felino")){
          $abrirtouchfelino.classList.toggle("running");
          
        }
   
        if(e.target.matches(".btn-abrir-dias-lime")){
          $abrirdiaslime.classList.toggle("running");
        }
  
        if(e.target.matches(".btn-abrir-exh-condicionada")){
          $abrirexhcondicionada.classList.toggle("running");
        }
  
        if(e.target.matches(".btn-abrir-bio")){
          $bio.classList.toggle("running");
        }
       
         //ver video Frío (frio.html)
  
         if(e.target.matches(".btn-video-frio")){
  
          $videofrio.classList.add("opacity-1");
         // presionar();
          //$btnvideofrio.classList.toggle("btn-video-frio-play");
         
         }
  
  });
  
  
  
  
  
  
  
  
  
  
  
  