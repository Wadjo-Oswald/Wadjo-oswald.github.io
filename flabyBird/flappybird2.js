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

cvs.width = 300;
cvs.height = 400;


// Parametre tuyau
 var ecartTuyau = 80;
 var largeurTuyau = 40;


let tabTuyau= [];

 tabTuyau[0] = {
    x: cvs.width,
    y:cvs.height - 150
 }
    //parametre oiseau
    let xoiseau = 100;
    let yoiseau = 150;
    var gravite = 2;
    let vol = 0;

    document.addEventListener('click' ,monte);

    function monte(){
        vol = 10;
        yoiseau = yoiseau - 35;
    }



  //dessin
  function dessin(){
  con.drawImage(arrierPlan,0 , 0);

  

     //Gestion de Tuyau
     for(let i=0; i<tabTuyau.length; i++){
        tabTuyau[i].x--;

        //dessing ggg
        con.drawImage(tuyauBas,tabTuyau[i].x, tabTuyau[i].y);
        con.drawImage(tuyauHaut, tabTuyau[i].x, tabTuyau[i].y - ecartTuyau - tuyauHaut.height);

        if((tabTuyau[i].x === 100)){
            tabTuyau.push({
                x: cvs.width ,
                y: Math.floor(100 + Math.random()*180)
        })
        }
        else if(tabTuyau[i].x + largeurTuyau < 0){
            tabTuyau.splice(i,1);
        }
     }
     
 
  con.drawImage(avantPlan, 0, cvs.height - avantPlan.height);

  // mouvement oiseau
  yoiseau = yoiseau + gravite;
  if(vol>0){
    vol--;
    con.drawImage(oiseau2,xoiseau,yoiseau);
  }
  else{
    con.drawImage(oiseau1, xoiseau,yoiseau);
  }
  
  con.strokeRect(0,0,cvs.width,cvs.height);
      requestAnimationFrame(dessin);
}
 dessin();




