var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');

var modal1=document.getElementById('Modal1')
var modal2=document.getElementById('Modal2')

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
var heading=document.getElementById("editheading");
var para=document.getElementById("editpara");
var editbtn=document.getElementById("edit");
var x=0;
editbtn.onclick=function(){
if(x==0){
heading.setAttribute("contenteditable","true");
para.setAttribute("contenteditable","true");
heading.style.border = '1px red solid';
para.style.border = '1px red solid';
editbtn.innerHTML="save";
x=1;
}
else{
heading.setAttribute("contenteditable","false");
para.setAttribute("contenteditable","false");
heading.style.border = "none";
para.style.border = "none";
editbtn.innerHTML="edit";
x=0;
}
}

var l=document.getElementById("like");
var countShow=document.getElementById("count");
var count=0;
l.onclick=function(){
count++;
countShow.innerHTML=count + " person likes this!";
l.innerHTML="Liked!"
}


var btn3=document.getElementById("comment");
var comments=document.getElementById("comments");
btn3.onclick=function(){
var text=document.getElementById("text").value;
 var para = document.createElement("div");
 para.setAttribute("class","commentdiv");
  var t = document.createTextNode(text);
  para.appendChild(t);
  div=document.getElementById("comments");
  div.insertBefore(para,div.childNodes[0])
}