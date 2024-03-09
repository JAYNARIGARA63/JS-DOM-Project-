const inputitem = document.querySelector('#item')
const submittask = document.querySelector('#submitTask')
const toDobox = document.querySelector('#toDobox')
// ---------------------------------for add value with enter-------------------------------------

// item.addEventListener('keyup', 
//     function(event){
//         if (event.key == "Enter") {
//             addToDo(this.value) 
//             this.value = ''
//         }
//     }
// )


submittask.addEventListener('click',
    function(){
        const inputValue = inputitem.value;
        addToDo(inputValue);
        inputitem.value = '';
    })

const addToDo = (inputitem) => {
    const listitem = document.createElement('li')

    listitem.innerHTML = 
    `
        ${inputitem}
        <div>
        <button id="donebtn">done</button>
        <button id="removebtn">remove</button>
        </div>
    `

    listitem.querySelector('#donebtn').addEventListener('click',
        function(){
            listitem.style.backgroundColor = '#95a5a6'
            listitem.style.textDecoration = 'line-through'
        })

    listitem.querySelector("#removebtn").addEventListener('click',
        function(){
            listitem.remove()
        }
    )
    toDobox.appendChild(listitem)
}

