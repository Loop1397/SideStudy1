let image1, image2, image3, image4;

window.onload=()=>
{
    image1 = document.getElementById("image1");
    image2 = document.getElementById("image2");
    image3 = document.getElementById("image3");
    image4 = document.getElementById("image4");
}

MouseOn1=()=> {
    image1.setAttribute("style","width:400px;");
}

MouseOut1=()=> {
    image1.setAttribute("style","width:150px;");
}

MouseOn2=()=> {
    image2.setAttribute("style","width:400px;");
}

MouseOut2=()=> {
    image2.setAttribute("style","width:150px;");
}

MouseOn3=()=> {
    image3.setAttribute("style","width:400px;");
}

MouseOut3=()=> {
    image3.setAttribute("style","width:150px;");
}

MouseOn4=()=> {
    image4.setAttribute("style","width:400px;");
}

MouseOut4=()=> {
    image4.setAttribute("style","width:150px;");
}