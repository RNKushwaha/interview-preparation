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

let pageBtnA = getEl('solution-popup')
let pagePopupA = getEl('solution-popup-html')

let pageBtnB = getEl('more-popup')
let pagePopupB = getEl('more-popup-html')

let pageBtnC = getEl('close-menu')
let pagePopupC = getEl('close-menu-html')

let pageBtnD = getEl('open-menu')

elClick(pageBtnA, () => { 
    if (elGetStyle(pagePopupA) == 'none') {
        elSetStyle(pagePopupA, '')
    } else {
        elSetStyle(pagePopupA, 'none')
    }
});

elClick(pageBtnB, () => {
    if (elGetStyle(pagePopupB) == 'none') {
        elSetStyle(pagePopupB, '');
    } else {
        elSetStyle(pagePopupB, 'none');
    }
})

elClick(pageBtnC, () => {
    if (elGetStyle(pagePopupC) == 'none') {
        elSetStyle(pagePopupC, '');
    } else {
        elSetStyle(pagePopupC, 'none');
    }
})

elClick(pageBtnD, () => {
    elSetStyle(pagePopupC, '');
})

document.addEventListener("click", function(event) {
    if (event.target.closest("#solution-popup-html")) return;
    elSetStyle(pagePopupA, 'none');
    elSetStyle(pagePopupB, 'none');
}, true);
