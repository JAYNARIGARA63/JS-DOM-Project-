let selectClock = document.querySelector('#clock')

setInterval(function(){
    let SelectDate = new Date
    selectClock.innerHTML = SelectDate.toLocaleTimeString()
},1000)