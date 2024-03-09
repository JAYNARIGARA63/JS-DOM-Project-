// // genrate a random color

function randomColor(){
    let hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() *  16)]
    }
    return color
}

let stopReference
const startChangingcolor = function(){
    if (!stopReference) {
        stopReference = setInterval(changebgcolor,1000)
    }
    function changebgcolor(){
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingcolor = function(){
    clearInterval(stopReference)
    stopReference = null;
}
document.querySelector('#start').addEventListener('click',startChangingcolor)
document.querySelector('#stop').addEventListener('click',stopChangingcolor)