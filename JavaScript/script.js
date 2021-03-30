var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');
var btn3=document.getElementById('createpost');
var modal1=document.getElementById('Modal1')
var modal2=document.getElementById('Modal2')
var modal3=document.getElementById('Modal3')
var close1=document.getElementsByClassName("close")[0];
var close2=document.getElementsByClassName("close")[1];
var close3=document.getElementsByClassName("close")[2];

btn1.onclick=function(){
	modal1.style.display="block";
}
close1.onclick=function(){
modal1.style.display="none";
}

btn2.onclick=function(){
	modal2.style.display="block";
}
close2.onclick=function(){
modal2.style.display="none";
}

btn3.onclick=function(){
	modal3.style.display="block";
}
close3.onclick=function(){
modal3.style.display="none";
}
