const container = document.querySelector('.container')

window.onmousemove = function(e){
    let x = e.clientX / 5
        y = e.clienyY / 5
    container.style.backgroundPositionX = x + 'px'
    container.style.backgroundPositionY = y + 'px'
}