
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
  $abririnsecta=document.getElementById("abrir-insecta"),
  $abririnfinito1=document.getElementById("abrir-infinito1"),
  $abrir3=document.getElementById("abrir-3"),
  $abrirdiaslime=document.getElementById("abrir-dias-lime"),
  $btninsecta=document.getElementById("btn-insecta"),
  $btntachfelino=document.getElementById("btn-tach-felino"),
  $btndiaslime=document.getElementById("btn-dias-lime"),
  $discdiaslime=document.getElementById("disc-dias-lime"),
  $disctachfelino=document.getElementById("disc-tach-felino"),
  $discinsecta=document.getElementById("disc-insecta"),
  $galery=document.getElementById("galery"),
  $galery2=document.getElementById("galery2"),
  $insectacontainertotal=document.getElementById("insecta-container-total"),
  $discinsectacontainer=document.getElementById("disc-insecta-container"),
  $fondoinsecta=document.getElementById("fondo-insecta"),
  $abrirtouchfelino=document.getElementById("abrir-touch-felino");
  
  
  
  //BOTÓN VIDEO FRÍO (frio.html)
  
   
  
  
  const $btnvideofrio=document.getElementById("btn-video-frio"),
  
  $videofrio=document.getElementById("video-frio");
  
  
  
  
  
  
  
  
  
  
  
  
  document.addEventListener("click", (e)=>{
  
          //abrir tapas discos (index.html)
  
         if(e.target.matches(".btn-abrir-gr")){
         $abrirgrtapa.classList.toggle("running");
         
           }
  
         if(e.target.matches(".btn-abrir-insecta")){
            $abririnsecta.classList.toggle("running");
          $btninsecta.classList.toggle("running");
          /* $discinsecta.classList.toggle("disc-rotation");
          */
         $fondoinsecta.classList.toggle("box-shadow");
          $discinsectacontainer.classList.toggle("disc-animation");

           $insectacontainertotal.classList.toggle("visited-disc");
          
          }
  
      
  
        if(e.target.matches(".btn-abrir-touch-felino")){
          $abrirtouchfelino.classList.toggle("running");
          $btntachfelino.classList.toggle("running");
          $disctachfelino.classList.toggle("disc-rotation");
          
        }
   
        if(e.target.matches(".btn-abrir-dias-lime")){
          $abrirdiaslime.classList.toggle("running");
          $btndiaslime.classList.toggle("running");
          $discdiaslime.classList.toggle("disc-rotation");
        }
  
        if(e.target.matches(".transp-foto")){
          $galery.classList.toggle("normal-galery");
         
          
        }
  
        if(e.target.matches(".transp2-foto")){
          $galery2.classList.toggle("normal-galery");
         
          
        }
       
         //ver video Frío (frio.html)
  
         if(e.target.matches(".btn-video-frio")){
  
          $videofrio.classList.add("opacity-1");
         // presionar();
          //$btnvideofrio.classList.toggle("btn-video-frio-play");
         
         }
  
  });
  
  
  
  
  
  
  
  
  
  
  
  