let number = document.getElementById('number')
let messageInput = document.getElementById('message')
let sendBtn = document.getElementById('sendBtn')
let style = ""

function setStyle(e){
style = e.value
}


function validation(){
    if(!messageInput.value||!number.value||number.value.length !=10){
        sendBtn.classList.remove('active')
    }else{
        sendBtn.classList.add('active')
    }
}


function sendMessage(){
    let message = style+messageInput.value+style
    let api = `https://api.whatsapp.com/send/?phone=${number.value}&text=${message}`
    let a = document.createElement('a')
    a.href = api
    a.setAttribute('target', "_blank")
    a.click()
}


messageInput.addEventListener('input',validation)
number.addEventListener('input',validation)