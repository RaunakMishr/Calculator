function abc(val)
{
document.getElementById("result").value+=val
}
function solve()
{
let x = document.getElementById("result").value
let y = eval(x)
document.getElementById("result").value = y
}
function clr()
{
document.getElementById("result").value = ""
}
function bs()
{
var t = document.getElementById("result").value;
 document.getElementById("result").value = t.substr(0, t.length - 1);
}