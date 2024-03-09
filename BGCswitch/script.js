const selectBox = document.querySelectorAll('.box')
const selectbody = document.querySelector('body')

selectBox.forEach(function(box){
    console.log(box);
    box.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            selectbody.style.backgroundColor = 'grey'
        }
        if (e.target.id === 'purple') {
            selectbody.style.backgroundColor = 'purple'
        }
        if (e.target.id === 'blue') {
            selectbody.style.backgroundColor = 'blue'
        }
        if (e.target.id === 'yellow') {
            selectbody.style.backgroundColor = 'yellow'
        }
    })
})
    

