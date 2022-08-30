

function togglePopup(button){
    
    let buttonNum=button.id.substring(1,2);
    
    document.getElementById("popup-"+buttonNum).classList.toggle("active");
}

let closeBtns=document.getElementsByClassName("close-btn");

if (closeBtns){
    for(let closeBtn of closeBtns){
        console.log(closeBtn);
        closeBtn.setAttribute("onclick","togglePopup(this)");
    }
}
