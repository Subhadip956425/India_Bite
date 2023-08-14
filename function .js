// serach bar

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

//Responsive


    $('.dropbtn').click(function()
    {
        $('.dropdown').toggleClass('display');
    })
    $('.dropbtn2').click(function()
    {
        $('.dropdown2').toggleClass('display');
    })
    $('.fa-bars').click(function()
    {
        $('.menu-content').toggle();
    })



    // preloader

        window.onload=function()
        {
            document.getElementById('preloader').style.display="none";
            document.getElementById('loader').style.display="block";
        }



        //  message js 

        const section = document.querySelector("section"),
          overlay = document.querySelector(".overlay"),
          showBtn = document.querySelector(".show-modal"),
          closeBtn = document.querySelector(".close-btn");
        showBtn.addEventListener("click", () => section.classList.add("active"));
        overlay.addEventListener("click", () =>
          section.classList.remove("active")
        );
        closeBtn.addEventListener("click", () =>
          section.classList.remove("active")
        );
