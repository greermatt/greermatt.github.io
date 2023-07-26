// let randomNumber = Math.floor(Math.random()*9);
// console.log(randomNumber);

const randomInspiration = () => {
    let i = Math.floor(Math.random()*9);
    switch (i) {
        case 1:
            return 'God is with you, wherever you go. (Romans 8:39)';
            break;
        case 2:
            return 'You can find strength today in God. (Philippians 4:13)';
            break;
        case 3:
            return 'You are loved, even on your darkest days. (John 3:16)';
            break;
        case 4:
            return 'He can guide you out of temptation. (1 John 4:4)';
            break;
        case 5:
            return 'God is greater than all things. (Isaiah 40:28)';
            break;
        case 6:
            return 'You are not abandoned, but adopted. (Romans 8:15-17)';
            break;
        case 7:
            return 'God sees the good you are working towards. (Hebrews 6:10)';
            break;
        case 8:
            return 'His peace is stronger than your fear. (John 14:27)';
            break;
        default:
            return "'You are not a burden. I Promise.' - God";
            break;
    };
};

// getting html by id
let button = document.getElementById('message-button');
let message = document.getElementById('js-message');
let resetButton = document.getElementById('button-reset');

// changing innerHTML of message
const changeText = () => message.innerHTML = randomInspiration();

// add event listener click on button
button.onclick = changeText;

// change color of button when mouseover and reset when mouseout
let changeColor = () => {
    button.style.backgroundColor = 'black'
    button.style.color = 'white' }

let resetColor = () => {
    button.style.backgroundColor = 'white'
    button.style.color = 'black'
}

button.onmouseover = changeColor;
button.onmouseout = resetColor;
