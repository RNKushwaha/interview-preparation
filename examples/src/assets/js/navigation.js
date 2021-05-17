"use strict";
function getEl(id){
    return document.getElementById(id);
}
function elClick(el, func){
    return el.addEventListener('click', func);
}
function elGetStyle(el){
    return el.style.display;
}
function elSetStyle(el, display){
    return el.style.display = display;
}

let btnA = getEl('solution-popup')
let popupA = getEl('solution-popup-html')

let btnB = getEl('more-popup')
let popupB = getEl('more-popup-html')

let btnC = getEl('close-menu')
let popupC = getEl('close-menu-html')

let btnD = getEl('open-menu')

elClick(btnA, () => {
    if (elGetStyle(popupA) == 'none') {
        elSetStyle(popupA, '')
    } else {
        elSetStyle(popupA, 'none')
    }
});

elClick(btnB, () => {
    if (popupB.style.display == 'none') {
        popupB.style.display = ''
    } else {
        popupB.style.display = 'none'
    }
})

elClick(btnC, () => {
    if (popupC.style.display == 'none') {
        popupC.style.display = ''
    } else {
        popupC.style.display = 'none'
    }
})

elClick(btnD, () => {
    popupC.style.display = ''
})

document.addEventListener("click", function(event) {
    if (event.target.closest("#solution-popup-html")) return;

    popupA.style.display = 'none'
    popupB.style.display = 'none'
}, true);
