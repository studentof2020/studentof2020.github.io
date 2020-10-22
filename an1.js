var myVar;
var sec;
function fun1()
{
	document.getElementById("quesdiv").style.display = "block";
 	document.getElementById("btn1").style.display = "none";
 	document.getElementById("inpsubmit").style.display = "block";
 	start();
}
function start()
{
  sec = 1;
  myVar = setInterval(function()
{
    document.getElementById("timer").innerHTML = sec;
    sec++;
  }, 1000);
}
function stop()
{
  alert(sec-1);
  clearInterval(myVar);
}