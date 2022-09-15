function changeText(ev) {
    if(ev.getAttribute('data-show') === "true") {
        ev.innerText = "Аня байда"
        ev.setAttribute('data-show', "false"); 
    }
    else {
        ev.innerText = "Никита байда"
        ev.setAttribute('data-show', "true"); 
    }
}