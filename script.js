//Animation de la navbar

const animation = document.querySelector('.hideOnMobile');

animation.addEventListener("mouseover", () => {
    animation.style.transform = "scale(1.2)"
});
animation.addEventListener("mouseout", () => {
    animation.style.transform = "scale(1)";
});
//box1 
const box = document.querySelector('.box');

box.addEventListener("mouseover", () => {
    box.style.transform = "scale(1.1)";
        box.style.backgroundColor = "#ffff";

});
box.addEventListener("mouseout", () => {
    box.style.transform = "scale(1)";
    box.style.backgroundColor = "#ffff";

});


const box1 = document.querySelector('.box1');

box1.addEventListener("mouseover", () => {
    box1.style.transform = "scale(1.1)";
    box1.style.backgroundColor = "#ffff";

});
box1.addEventListener("mouseout", () => {
    box1.style.transform = "scale(1)";
    box1.style.backgroundColor = "#ffff";

});

const box2 = document.querySelector('.box2');

box2.addEventListener("mouseover", () => {
    box2.style.transform = "scale(1.1)";
    box2.style.backgroundColor = "#ffff";

});
box2.addEventListener("mouseout", () => {
    box2.style.transform = "scale(1)";
    box2.style.backgroundColor = "#ffff";

});




const btn = document.getElementById("btn-project");

btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#0b80b2ff";
    btn.style.boxShadow = "0 0 15px #2ecc71";

});
btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "#008000";
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "none";
});
const btn1 = document.getElementById("btn-cv");

btn1.addEventListener("mouseover", () => {
    btn1.style.backgroundColor = "#0b80b2ff";
    btn1.style.transform = "scale(1.1)";

});
btn1.addEventListener("mouseout", () => {
    btn1.style.backgroundColor = "#008000";
    btn1.style.transform = "scale(1)";
});
const btn2 = document.getElementById("btn-box1");

btn2.addEventListener("mouseover", () => {
    btn2.style.backgroundColor = "#0b80b2ff";
    btn2.style.transform = "scale(1.1)";
    btn2.style.boxShadow = "0 0 15px #2ecc71";
    btn2.style.transform = "rotate(5deg) scale(1.1)";

});
btn2.addEventListener("mouseout", () => {
    btn2.style.backgroundColor = "#008000";
    btn2.style.transform = "rotate(0deg) scale(1)";
    btn2.style.boxShadow = "none";
});
const btn3 = document.getElementById("btn-box2");

btn3.addEventListener("mouseover", () => {
    btn3.style.backgroundColor = "#0b80b2ff";
    btn3.style.transform = "scale(1.1)";
    btn3.style.boxShadow = "0 0 15px #2ecc71";
    btn3.style.transform = "rotate(5deg) scale(1.1)";

});
btn3.addEventListener("mouseout", () => {
    btn3.style.backgroundColor = "#008000";
    btn3.style.transform = "rotate(0deg) scale(1)";
    btn3.style.boxShadow = "none";
});
const btn4 = document.getElementById("btn-box3");

btn4.addEventListener("mouseover", () => {
    btn4.style.backgroundColor = "#0b80b2ff";
    btn4.style.transform = "scale(1.1)";
    btn4.style.boxShadow = "0 0 15px #2ecc71";
    btn4.style.transform = "rotate(5deg) scale(1.1)";

});
btn4.addEventListener("mouseout", () => {
    btn4.style.backgroundColor = "#008000";
    btn4.style.transform = "rotate(0deg) scale(1)";
    btn4.style.boxShadow = "none";
});



function showSidebar () {
    const sb = document.querySelector('.sideBar');
    sb.style.display= 'flex';
}
function hideSidebar () {
    const sb = document.querySelector('.sideBar');
    sb.style.display= 'none';
}


// Validation de formulaire

document.getElementById("fname").addEventListener("submit", function() {
    let ffname = document.getElementById("fnameMsg");
    if (this.value.trim() === "") {
        ffname.innerHTML = "Prénom obligatoire";
        
    } else if (this.value.length < 3){
        ffname.innerHTML = `Le prénom doit avoir au moins 3 caractères`;
    } else {
        ffname.innerHTML = "";
    }    
});