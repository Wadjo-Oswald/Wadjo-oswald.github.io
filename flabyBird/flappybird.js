                        // pour l'image
var cvs = document.getElementById('canvas1');
var con = cvs.getContext('2d');

//image
var arrierPlan = new Image();
   arrierPlan.src = "images_sons_flappyBird/images/arrierePlan.png";
var avantPlan = new Image();
  avantPlan.src ="images_sons_flappyBird/images/avantPlan.png";
var oiseau1 = new Image();
   oiseau1.src ="images_sons_flappyBird/images/oiseau1.png";
var oiseau2 = new Image();
   oiseau2.src ="images_sons_flappyBird/images/oiseau2.png";
var tuyauBas = new Image();
    tuyauBas.src ="images_sons_flappyBird/images/tuyauBas.png";
var tuyauHaut = new Image();
     tuyauHaut.src ="images_sons_flappyBird/images/tuyauHaut.png";

     var taille = tuyauHaut.height;
     alert(taille);
cvs.width = 300;
cvs.height = 400;


// Parametre tuyau
var largeurTuyau = 40;
var ecartTuyau = 80;

let xTuyauHaut = 200;
let yTuyauBas = cvs.height -150;


  //dessin
  function dessin(){
  con.drawImage(arrierPlan,0 , 0);
  con.drawImage(tuyauBas, xTuyauHaut, yTuyauBas);
  con.drawImage(tuyauHaut, xTuyauHaut, yTuyauBas - ecartTuyau - tuyauHaut.height);
  con.drawImage(avantPlan, 0, cvs.height - avantPlan.height);
  con.drawImage(oiseau1, 100,150);
  con.drawImage(oiseau2);
  con.strokeRect(0,0,cvs.width,cvs.height);
      requestAnimationFrame(dessin);
  }
  dessin();




