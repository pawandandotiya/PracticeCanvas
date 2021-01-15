var image=null;

function doLime()
{
  var dd1=document.getElementById("d1");
  dd1.style.backgroundColor="lime";
  var dd2=document.getElementById("d2");
  dd2.style.backgroundColor="black";
}
function ChangeColor()
{
  var dd1=document.getElementById("d1");
  dd1.style.backgroundColor="lime";
  var dd2=document.getElementById("d2");
  dd2.style.backgroundColor="green"; 
}
function doYellow()
{
  var dd1=document.getElementById("d1");
  dd1.style.backgroundColor="yellow";
  var dd2=document.getElementById("d2");
  dd2.style.backgroundColor="red";
  var ctx=dd1.getContext("2d");
  ctx.fillStyle="green";
  ctx.fillRect(10,10,40,40);
  ctx.fillStyle="red";
  ctx.fillRect(60,10,40,40);
  ctx.fillStyle="black";
  ctx.font="30px Arial";
  ctx.fillText("Hello",10,80);
}
function doWhite()
{
  var dd1=document.getElementById("d1");
  var ctx=dd1.getContext("2d");
  ctx.clearRect(0,0,dd1.width,dd1.height);
   dd1.style.backgroundColor="white";
  var dd2=document.getElementById("d2");
  dd2.style.backgroundColor="blue"; 
}
function docolor()
{
  var dd1=document.getElementById("d3");
  var colorinput=document.getElementById("clr");
  var color=colorinput.value;
  dd1.style.backgroundColor=color;
}
function dosquare()
{
  var dd1=document.getElementById("d4");
  var sizeinput=document.getElementById("sldr");
  var size=sizeinput.value;
  var ctx=dd1.getContext("2d");
  ctx.clearRect(0,0,dd1.width,dd1.height);
  ctx.fillStyle="yellow";
  ctx.fillRect(5,5,size,size);
}
function upload()
{
  
  var canvas = document.getElementById("can");
  var file = document.getElementById("finput"); 
  image = new SimpleImage(file);
  image.drawTo(canvas);
}

function makeGrayScale()
{
  for(var pixel of image.values())
    {
      var avg=(pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
  var imgcanvas =document.getElementById("can1");
  image.drawTo(imgcanvas);
}