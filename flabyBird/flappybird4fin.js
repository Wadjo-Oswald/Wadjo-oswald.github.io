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
    
     //son
     var sonVol = new Audio();
     sonVol.src ="images_sons_flappyBird/sons/sonVole.mp3";
     var sonChoc = new Audio();
     sonChoc.src ="images_sons_flappyBird/sons/sonChoc.mp3";
     var sonScore = new Audio();
     sonScore.src ="images_sons_flappyBird/sons/sonScore.mp3";

cvs.width = 300;
cvs.height = 400;

// var taille = arrierPlan.height;
// alert(taille);
// Parametre tuyau
 var ecartTuyau = 80;
 var largeurTuyau = 40;


let tabTuyau= [];

 tabTuyau[0] = {
    x: cvs.width,
    y:cvs.height - 150
 }
    //parametre oiseau
    var xoiseau = 100;
    var yoiseau = 150;
    var gravite = 2;
    let vol = 0;
    var largeuroiseau = 34;
    var hauteroiseau = 24;
    var finduJeu = false;
    var score = 0;

    document.addEventListener('click' ,monte);

    function monte(){
      if (finduJeu === false){
         vol = 10;
         yoiseau = yoiseau - 30;
        sonVol.play();
      }
      else{
        setTimeout(RechargeLeJeu, 700);
      }
    }



  //dessin
  function dessin(){
  con.drawImage(arrierPlan,0 , 0);

  

     //Gestion de Tuyau
     for(let i=0; i<tabTuyau.length; i++){
        tabTuyau[i].x--;

        //dessing tuyau
        con.drawImage(tuyauBas,tabTuyau[i].x, tabTuyau[i].y);
        con.drawImage(tuyauHaut, tabTuyau[i].x, tabTuyau[i].y - ecartTuyau - tuyauHaut.height);

        if((tabTuyau[i].x === 100)){
            tabTuyau.push({
                x: cvs.width,
                y: Math.floor(100 + Math.random()*180)
        })
        }
        else if(tabTuyau[i].x + largeurTuyau < 0){
            tabTuyau.splice(i,1);
        }

        //gestion de collision
        if(yoiseau < 0 || yoiseau + hauteroiseau > 300 ||(xoiseau + largeuroiseau >= tabTuyau[i].x && xoiseau <= tabTuyau[i].x + largeurTuyau
        && (yoiseau + hauteroiseau >= tabTuyau[i].y || yoiseau + ecartTuyau <= tabTuyau[i].y))){
            finduJeu = true;
            sonChoc.play();

        }

        if(xoiseau === tabTuyau[i].x + largeurTuyau + 5){
            score++;
            sonScore.play();
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
  con.fillStyle ='black';
con.font = '20px Verdana';
con.fillText('Score : '+ score,10,cvs.height - 20);
  
  con.strokeRect(0,0,cvs.width,cvs.height);
  if(finduJeu === false){
    requestAnimationFrame(dessin);
  } 
  else{
    con.fillStyle ='black';
con.font = '20px, Verdana';
con.fillText("Fin de la partie",70,200);
con.font = '18px Verdana';
con.fillText('Cliquer pour recommence',5,240);
  }
      
}
function RechargeLeJeu(){
    finduJeu = false;
    location.reload();
}
 dessin();




