console.log('Loaded!');
console.log('To check whether things are working fine via logs');

var element = document.getElementById('id1');
element.innerHTML='Content Changed! Wow!';

var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
   marginLeft = marginLeft + 1;
   img.style.marginLeft=marginLeft + 'px';

}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};
var button=document.getElementById("counter");
var counter=0;

button.onclick=function(){
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
};