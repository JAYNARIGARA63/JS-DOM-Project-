const showColorText = document.getElementById('randomColor')
const button = document.querySelector('#button')
const mainBackground = document.querySelector('#main')

function randomGenrate(){
    let firstLetter = '#'
    let otherLetter = '0123456789ABCDEF'
    for(let i = 0; i < 6; i++){
        firstLetter += otherLetter[Math.floor(Math.random() * 16)]
    }
    return firstLetter
}

button.addEventListener('click', function(){
    showColorText.innerHTML = randomGenrate()
    mainBackground.style.backgroundColor = randomGenrate()
})

