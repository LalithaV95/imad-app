console.log('Loaded!');
console.log('To check whether things are working fine via logs');

var element = document.getElementById('id1');
element.innerHTML='Content Changed! Wow!';

var img=document.getElementById('madi');
function moveRight(){
    marginLeft=marginLeft +5;
    img.style.marginLeft=marginLeft +'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};

