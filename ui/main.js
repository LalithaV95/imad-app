console.log('Loaded!');
console.log('To check whether things are working fine via logs');

var element = document.getElementById('id1');
element.innerHTML='Content Changed! Wow!';

var img=document.getElementById('madi');
img.onclick=function(){
    img.style.moveLeft='100px';
};

