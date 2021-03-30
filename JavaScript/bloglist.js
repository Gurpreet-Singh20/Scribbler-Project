var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');
var trash=document.getElementsByClassName('trash');
var no=document.getElementsByClassName('no');

var modal1=document.getElementById('Modal1')
var modal2=document.getElementById('Modal2')
var modal4=document.getElementById('Modal4');

var close1=document.getElementsByClassName("close")[0];
var close2=document.getElementsByClassName("close")[1];


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

trash[0].onclick=function(){
	modal4.style.display="block";
}
no[0].onclick=function(){
modal4.style.display="none";
}

trash[1].onclick=function(){
	modal4.style.display="block";
}
no[0].onclick=function(){
modal4.style.display="none";
}

trash[2].onclick=function(){
	modal4.style.display="block";
}
no[0].onclick=function(){
modal4.style.display="none";
}

trash[3].onclick=function(){
	modal4.style.display="block";
}
no[0].onclick=function(){
modal4.style.display="none";
}

trash[4].onclick=function(){
	modal4.style.display="block";
}
no[0].onclick=function(){
modal4.style.display="none";
}