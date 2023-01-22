function changeText(ev) {
    if(ev.getAttribute('data-show') === "true") {
        ev.innerText = "Аня неймовірно малює"
        ev.setAttribute('data-show', "false"); 
    }
    else {
        ev.innerText = "Аня дуже талановита"
        ev.setAttribute('data-show', "true"); 
    }
}
