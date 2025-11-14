var skills= document.getElementById('Skills');
var education= document.getElementById('education');
var image1= document.getElementById('image1');
var text1= document.getElementById('text1');
var image2= document.getElementById('image2');
var text2= document.getElementById('text2');
var image3= document.getElementById('image3');
var text3= document.getElementById('text3');
var bars= document.getElementById('bars');
var ul= document.getElementById('ul');
image1.addEventListener('mouseover', function(){
    text1.style.display ='block';
    text1.style.transform ='translateY(-0px)';
    text1.style.transition ='1s';
    
});
image1.addEventListener('mouseout', function(){
    text1.style.transform ='translateY(+250px)';
    text1.style.transition ='1s';
    text1.style.display ='none';
});
image2.addEventListener('mouseover', function(){
    text2.style.display ='block';
    text2.style.transform ='translateY(-0px)';
    text2.style.transition ='1s';   
});
image2.addEventListener('mouseout', function(){
    text2.style.transform ='translateY(+250px)';
    text2.style.transition ='1s';
    text2.style.display ='none';
});
image3.addEventListener('mouseover', function(){
    text3.style.display ='block';
    text3.style.transform ='translateY(-0px)';
    text3.style.transition ='1s';   
});
image3.addEventListener('mouseout', function(){
    text3.style.transform ='translateY(+250px)';
    text3.style.transition ='1s';
    text3.style.display ='none';
});

bars.addEventListener('click', function(){
    ul.style.display ='block';
});




















// skills.addEventListener('click', clickskills);
// education= education.addEventListener('click', clickeducation);
var dissapear= document.getElementById('dissapear');

//    function clickskills(){
//         dissapear.style.display ='grid';
//    }
// // function clickskills(){
// //  skills.innerHTML ='This is me';
// // }
function showdissapear(){
    dissapear.classList.toggle('open-me');
}