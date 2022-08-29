

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

let closeBtn=document.getElementById("close-btn");

if (closeBtn){
    closeBtn.addEventListener("click",togglePopup)
}
