var list = document.querySelectorAll(".song");
var imageSong = document.querySelector(".imageSong");
var SongName = document.querySelector(".title")

//PlayMusic Variable
var disque = document.querySelector(".fa-compact-disc")
var nextButton = document.getElementById("nextsong");
var prevButton = document.getElementById("preview");
var play = document.getElementById("playing");
var mode = document.getElementById("mode");

//Volume Variables
var volumeIcon = document.getElementById("volumeIcon");
var VolumeRange = document.getElementById ("VolumeRange");

//Time variables
var MusicRange = document.getElementById("TimeRange");
var initialTime = document.querySelector(".initialTime");
var finalTime = document.querySelector(".finalTime");

//PlayList variables
var playlistTitle = document.getElementById("head");
var PlaylistPage = document.querySelector(".playlistPage");
var PlayList = document.querySelector(".ContainList");
var fa_v = document.getElementById("fa-v");
var PlayingPage = document.querySelector(".PlayingPage");

//ModePlaylist Variables
var MusicIcon = document.getElementById("MusicIcon");
var modePlaylist = document.querySelector(".modePlaylist");
var CloseMode = document.getElementById("CloseMode");
var shape = document.querySelector(".scroll");

//Listenpage Variables
var listenpage = document.querySelector(".listenpage");
var listenTitle = document.querySelector(".listenTitle");
var prevListen = document.getElementById("prev")
var nextListen = document.getElementById("next");




var MusicList =[
    {
        Name : "Damso - N. J Respect R",
        song : "music/Damso - N. J Respect R.mp3",
        img  : "Image/profil.jpg",
    },
    {
        Name : "Damso - Γ. Mosaïque Solitaire",
        song : "music/Damso - Γ. Mosaïque Solitaire.mp3",
        img  : "Image/profil2.jpg",
    },
    {
        Name : "Damso Θ Macarena Clip Officiel_ltgr",
        song : "music/Damso Θ Macarena Clip Officiel_ltgr.mp3",
        img  : "Image/page.jpg",
    },
    {
        Name : "Damso - Feu de bois Audio",
        song : "music/Damso - Feu de bois Audio   Paroles.mp3",
        img  : "Image/post4.png",
    },
    {
        Name : "DAKS_-_Sombre__Clip_Officiel",
        song : "music/DAKS_-_Sombre__Clip_Officiel______Monstre_2(128k).mp3",
        img  : "Image/profil.jpg",
    },
    {
        Name : "Damso - Autotune(0)",
        song : "music/Damso - Autotune(0).mp3",
        img  : "Image/profil2.jpg",
    },
    {
        Name : "50_Cent_-_In_Da_Club",
        song : "music/50_Cent_-_In_Da_Club__Official_Music_Video_(256k).mp3",
        img  : "Image/page.jpg",
    },
    {
        Name : "Amaarae-SAD GIRLZ LUV MONEY",
        song : "music/Amaarae - SAD GIRLZ LUV MONEY ft Moliy (Official Video) (3).mp3",
        img  : "Image/post4.png",
    },
    {
        Name : "Ariana Grande 7 rings",
        song : "music/Ariana Grande 7 rings Official Video_ltgr.mp3",
        img  : "Image/profil.jpg",
    },
    {
        Name : "Booba_-_Mona_Lisa_Feat._JSX",
        song : "music/Booba_-_Mona_Lisa_Feat._JSX_(Clip_Officiel)(256k).mp3",
        img  : "Image/profil2.jpg",
    },
    {
        Name : "Central_Cee_x_Dave_-_Sprinter_",
        song : "music/Central_Cee_x_Dave_-_Sprinter_[Music_Video](256k).mp3",
        img  : "Image/page.jpg",
    },
    {
        Name : "Childish_Gambino_-_This_Is_America_",
        song : "music/Childish_Gambino_-_This_Is_America_(Official_Video)(256k).mp3",
        img  : "Image/post4.png",
    },
    {
        Name : "Drake_-_God's_Plan",
        song : "music/Drake_-_God's_Plan(256k).mp3",
        img  : "Image/profil.jpg",
    },
    {
        Name : "Eminem_-_Till_I_Collapse_",
        song : "music/Eminem_-_Till_I_Collapse_[HD](256k).mp3",
        img  : "Image/profil2.jpg",
    },
    {
        Name : "Kelvyn_Colt_-_RAGE_",
        song : "music/Kelvyn_Colt_-_RAGE_(Official_Video)(256k)-1.mp3",
        img  : "Image/page.jpg",
    },
    {
        Name : "Koba LaD Beldia Clip officiel_ltgr",
        song : "music/Koba LaD Beldia Clip officiel_ltgr.mp3",
        img  : "Image/post4.png",
    },
    {
        Name : "Lil Nas X - DEAD RIGHT NOW",
        song : "music/Lil Nas X - DEAD RIGHT NOW.mp3",
        img  : "Image/profil.jpg",
    },
    {
        Name : "Lil_Wayne_-_Love_Me__Explicit",
        song : "music/Lil_Wayne_-_Love_Me__Explicit_Version_Closed_Captioned__ft._Drake,_Future(256k).mp3",
        img  : "Image/profil.jpg",
    },
    {
        Name : "Lojay,_Sarz_-_Monalisa",
        song : "music/Lojay,_Sarz_-_Monalisa_(Lyrics)(256k).mp3",
        img  : "Image/page.jpg",
    },
    {
        Name : "NF_-_The_Search(256k)",
        song : "music/NF_-_The_Search(256k).mp3",
        img  : "Image/post4.png",
    },
    {
        Name : "Ninho_-_Jefe_(Paroles)",
        song : "music/Ninho_-_Jefe_(Paroles)___Jefe(240p).mp3",
        img  : "Image/profil.jpg",
    },
    {
        Name : "/Pop Smoke - Hello (Audio) ft. A Boogie ",
        song : "music/Pop Smoke - Hello (Audio) ft. A Boogie wit da Hoodie_128k.mp3",
        img  : "Image/profil2.jpg",
    },
    {
        Name : "Soulja_Boy_She_Make_It_Clap_",
        song : "music/Soulja_Boy_–_She_Make_It_Clap_(Official_Video)(256k).mp3",
        img  : "Image/page.jpg",
    },
    {
        Name : "XXXTENTACION_-_HOPE",
        song : "music/XXXTENTACION_-_HOPE_(Mother_Of_Gekyume_in_Music_Video)_[FAN_MADE](128k).mp3",
        img  : "Image/post4.png",
    },
    
];

var timer;
var MusicIndex = 0;
var Playing = false;
Autoplay = 0;
var music = document.createElement("audio");


//EventListerner
play.addEventListener("click",ifPlaying);
nextButton.addEventListener("click" , NextSong);
prevButton.addEventListener("click", PrevSong);
volumeIcon.addEventListener("click", RemoveVolume);
VolumeRange.addEventListener("change", AdjustVolume);
MusicRange.addEventListener("change", SongRange);
mode.addEventListener("click", chooseMode);
music.addEventListener("timeupdate" , showMusicDuration)
fa_v.addEventListener("click", ShowPlaylist);
playlistTitle.addEventListener("click",ClosePlaylist);
MusicIcon.addEventListener("click", ShowModelist);
CloseMode.addEventListener("click", CloseModelist);
function loadSong(MusicIndex){
    clearInterval(timer);
    ResetRange();
    
    SongName.innerHTML = MusicList[MusicIndex].Name;
    music.src = MusicList[MusicIndex].song;
    imageSong.src = MusicList[MusicIndex].img
    listenTitle.innerHTML = MusicList[MusicIndex].Name;
    music.load();

    timer = setInterval(MoveMusicRange,1000);
}
loadSong(MusicIndex);

// the function to execute the playing or pausing of the song
function ifPlaying(){
    if(Playing == false){
        playSong();
    }
    else{
        pauseSong();
    }
}

//To play the song
function playSong(){
    Playing = true;
    play.innerHTML = "pause";
    music.play();
}

//To pause the song
function pauseSong(){
    Playing=false;
    play.innerHTML = "play_arrow";
    music.pause();
}

//Move to the next song
function NextSong(){
    music.pause();
    if(MusicIndex < MusicList.length - 1){
        
        MusicIndex++;
        loadSong(MusicIndex);
        playSong();
    }
    else{
        MusicIndex =0;
        loadSong(MusicIndex);
        playSong();
    }
   
}
//move to the Previous song
function PrevSong(){
   music.pause();
    if(MusicIndex > 0){
        MusicIndex--;
        loadSong(MusicIndex);
        playSong();
    }
    else{
        MusicIndex = MusicList.length - 1;
        loadSong(MusicIndex);
        playSong();
    }
}

function RemoveVolume(){
    volumeIcon.className = "fa-solid fa-volume-xmark";
    VolumeRange.value = 0;
    music.volume = 0;
};
function AdjustVolume(){
    music.volume = VolumeRange.value/100;
    if(music.volume == 0){
        volumeIcon.className = "fa-solid fa-volume-xmark";
    }
    else{
        volumeIcon.className = "fa-solid fa-volume-high";
    }
}



 function SongRange(){
    let sliderRange = music.duration * (MusicRange.value /100);
    music.currentTime = sliderRange;
 }

 function ResetRange(){
    MusicRange.value = 0;
 }

 function MoveMusicRange(){
    let position = 0;
    if(playSong){
        position = music.currentTime * (100 / music.duration)
    MusicRange.value = position
    }
    MusicEnded();
 }

 function MusicEnded(){
    if(music.ended){
        if(MusicIndex < MusicList.length - 1){
            MusicIndex++;
            loadSong(MusicIndex);
           playSong();
        }
        else if(MusicIndex == MusicList.length - 1){
            MusicIndex = 0;
            loadSong(MusicIndex);
            playSong();
        }
        
    }
 }
 
 function chooseMode(){
    
 }

 function showMusicDuration(){
    if(music.duration){
        //Taking the initial time to play the music
        let initMins = Math.floor(music.currentTime / 60);
        let initSecs = Math.floor(music.currentTime - initMins * 60);
        //Taking the time of the music
        let finMins = Math.floor(music.duration / 60);
        let finSecs = Math.floor(music.duration - finMins * 60)

        if(initMins < 10){
            initMins = "0" + initMins;
        }
        if(initSecs < 10){
            initSecs = "0" + initSecs;
        }
        if(finMins < 10){
            finMins = "0" + finMins;
        }
        if(finSecs < 10){
            finSecs = "0" + finSecs;
        }
        initialTime.innerHTML = initMins + ":" + initSecs;
        finalTime.innerHTML = finMins + ":" + finSecs;

    }
    else{
         initialTime.innerHTML = "00" + ":" + "00";
         finalTime.innerHTML = "00" + ":" + "00";   
    }
    setModelist();
   
 }
 function ShowPlaylist(){
    PlaylistPage.style.display = "block";
    PlayingPage.style.display = "none";
    modePlaylist.style.display = "none";
   
 }
 function setPlaylist(){
    var num = 1;
    
    for(i = 0; i < MusicList.length; i++){
        var div =document.createElement("div");
        div.classList.add("list");
        console.log(MusicList[i].Name)
        div.innerHTML =
        `<span>${num++}<span>.<p class="song">${MusicList[i].Name}</p>`;
        PlayList.appendChild(div);
    }
    
    PlayFromPlaylist();
 }
 setPlaylist();

 //Playing the music when clicking on the playlist
 function PlayFromPlaylist(){
    PlayList.addEventListener("click", e =>{
        if(e.target.classList.contains("song")){
        //    alert(e.target.innerHTML);

           let SongIndex = MusicList.findIndex((item , index) =>{
            if(item.Name === e.target.innerHTML){
               return true;
            }
           })
           console.log(SongIndex);
           loadSong(SongIndex);
           playSong();

           PlayingPage.style.transition ="5s"
           PlayingPage.style.transform = "translateY(10)"
           PlaylistPage.style.display ="none"
           PlayingPage.style.display="block";
        }
    })
 }

 // To show the list mode
 function ShowModelist(){
    modePlaylist.style.transform = "translateY(-75%)"
    modePlaylist.style.transition ="0.7s"
    modePlaylist.style.display ="block";
    
 }
 
 //To unShow the list mode
 function CloseModelist(){
    modePlaylist.style.transform = "translateY(75%)";
    modePlaylist.style.transition ="0.7s"
 }

 function setModelist(){
    for(i = 0; i < MusicList.length; i++){
        var Modediv =document.createElement("div");
        Modediv.classList.add("modeList");
        Modediv.innerHTML =
        `<h4><p class="modesong">${MusicList[i].Name}</p> <i>00 : 00</i></h4>`;
        shape.appendChild(Modediv);
    }
    
    PlayFrommodelist();
 }

 //Playing the music when clicking on the modelist
 function PlayFrommodelist(){
    shape.addEventListener("click", e =>{
        if(e.target.classList.contains("modesong")){
        //    alert(e.target.innerHTML);

           let modeIndex = MusicList.findIndex((showing , index) =>{
            if(showing.Name === e.target.innerHTML){
               return true;
            }
           })
           loadSong(modeIndex);
           playSong();

        }
    })
 }

 function ClosePlaylist(){
    PlaylistPage.style.display ="none";
    PlayingPage.style.display = "block";
 }

 

 
 






 

// console.log(MusicList[2]);
// function ShowList(){
//     list.forEach(
//         `<p class="song">${MusicList.Name}<i class="fa-solid fa-ellipsis"></i> <br> <i class="mega">4 Mo <span></span> mp3</i> </p>`
//     );
// }
