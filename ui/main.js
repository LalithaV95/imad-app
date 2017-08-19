console.log('Loaded!');
console.log('To check whether things are working fine via logs');



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

/*button.onclick=function(){
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
};*/

button.onclick=function(){
  var request=new XMLHttpRequest();
  
request.onreadystatechange = function(){
 if(request.readystate == XmlHttpRequest.DONE){
     if(request.status==200){
         var counter=request.responseText;
         var span=document.getElementById("count");
         span=counter.toString();
     }
 }   
};
request.open('GET','http://lalithambigav.imad.hasura-app.io/counter',true);
request.send(null);
};