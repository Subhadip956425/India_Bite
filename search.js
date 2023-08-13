function check()
{
var a = document.getElementById("name").value;
var b = "Biriyani";
var c = "biriyani";
var d = "pizza";
var e = "Pizza";
var f = "momo";
var g = "Momo";
var h = "chicken";
var i = "Chicken";
if(a == "")
{
    alert("Search box can't be empty");
    return false;
}
else if(a == b || a == c)
{
    open("biriyani.html");
}
else if(a == d || a == e)
{
    open("pizza.html");
}
else if(a == f || a == g)
{
    open("momo.html");
}
else if(a == h || a == i)
{
    open("chicken.html");
}
}