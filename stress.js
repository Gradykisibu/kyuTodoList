// 
let input = document.getElementById('input');
let btn = document.querySelector('#btn');
let output = document.querySelector('.outhere');
let body = document.getElementById('body');
let bModes = document.getElementById('bmode');
let warning = document.querySelector('.warn');
let count = 0;
let clear = document.getElementById('clear');
let remove = document.querySelector('#delete');
const toDo = document.createElement("div")

btn.addEventListener("click", ()=>{
    if(input.value == ''){
        warning.innerHTML = 'Add text'
        
        setTimeout(() => {
            warning.innerHTML = ''
        }, 8000)
    }else{
        const toDo = document.createElement("div")
        toDo.classList.add(".todo")
        toDo.innerHTML += `<li id="clear"><input type="checkbox" id="scretch">${input.value}</li>`
        output.appendChild(toDo)
        input.value = ""
    }
})

function del(){
  output.replaceChildren(toDo)
}

function onOff(){
    if(count == 0){
        count += 1
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
        bModes.innerHTML = '<p>☼</p>'
        bModes.style.border = '1px solid black'
        
    }else{
        count = 0
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
        bModes.innerHTML = '<p>☽</p>'
        bModes.style.border = '1px solid white'
    }
}
// var name = window.prompt('enter name?')
// console.log("hey", name)

// function clickkey(event){
//     if (event.key == "Enter"){}
// }


