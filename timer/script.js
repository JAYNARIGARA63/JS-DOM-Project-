const endTime = "26 february 2024 09:00  "

const Duration  = document.querySelectorAll('input')

function clock(){
    const end = new Date(endTime)
    const start = new Date()
    const diff = (end - start)
    console.log(diff);
    Duration[0].value = Math.floor(diff/(1000*60*60*24));
    Duration[1].value = Math.floor(diff/(1000*60*60) % 24);
    Duration[2].value = Math.floor(diff/(1000*60))%60;
    Duration[3].value = Math.floor(diff/(1000)%60);
}
clock()

setInterval(function(){ clock()},1000)