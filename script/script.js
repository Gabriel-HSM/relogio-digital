function updateClock(){ //função feita para atualizar o relogio

var data = new Date()
var hour = data.getHours()
var minutes = String(data.getMinutes()).padStart(2, '0'); //Tipo String porque o padStart deixa o número com um 0 a esquerda, e isso só pode ser feito por string
var seconds = String(data.getSeconds()).padStart(2, '0');


var image = window.document.getElementById('img')
var clock = window.document.getElementById('clock')
var message = document.getElementById('message')

if (hour > 5 && hour <= 12){
    image.src = 'imagens/manha.png'
    document.body.style.background = '#A3B63C'
    message.innerText = 'Bom Dia!!'
    
} else if (hour > 12 && hour <=17){
    image.src = 'imagens/tarde.png'
    document.body.style.background = '#FEFD9C'
    message.innerText = 'Boa Tarde!!'
} else {
    image.src = 'imagens/noite.png'
    document.body.style.background = '#2D5E87'
}

clock.innerHTML = `${hour} ${minutes} ${seconds}`
}

function startClock(){
    updateClock();
    setInterval(updateClock, 1000);
}

