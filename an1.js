var myVar;
var sec;
function fun1()
{
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
  alert(sec);
  clearInterval(myVar);
}