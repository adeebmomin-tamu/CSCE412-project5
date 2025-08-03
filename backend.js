// stores the preivous value of the style for page
window.onload = function(){
    if(localStorage.getItem("currentStyle")){
        document.getElementById("styles").setAttribute("href", localStorage.getItem("currentStyle"));
    }
    else{
        document.getElementById("styles").setAttribute("href" , "style1.css")
    }
} 

// functionality for the button
function changeStyle(){
    if(document.getElementById("styles").getAttribute("href") == "style1.css"){
        document.getElementById("styles").setAttribute("href", "style2.css");
        localStorage.setItem("currentStyle","style2.css");
    }
    else{
        document.getElementById("styles").setAttribute("href","style1.css");
        localStorage.setItem("currentStyle","style1.css");
    }
}