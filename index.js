//  function rgbGenerator() {
//     const red = Math.floor(Math.random() * 255);
//     const green = Math.floor(Math.random() * 255);
//     const blue = Math.floor(Math.random() * 255);
//     return `rgb( ${red}, ${green}, ${blue})`
// }
// let buttonClicked = document.getElementById("changeColor");
// buttonClicked.addEventListener('click', () =>{
//     document.body.style.backgroundColor = rgbGenerator();
// })
const output = document.querySelector("#output");
let buttonClicked = document.getElementById("changeColor");
const copytbtn = document.querySelector('#copy-btn');
function HexaGenerator() {
    const red = Math.floor(Math.random() * (255 - 16 + 1) + 16);
    const green = Math.floor(Math.random() * (255 - 16 + 1) + 16);
    const blue = Math.floor(Math.random() * (255 - 16 + 1) + 16);
    return `${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
output.addEventListener('keyup', function(e){
    const color = e.target.value
    if (color && isValid(color)){
        document.body.style.backgroundColor =  `#${color}`;
        console.log(color);
    }
})
buttonClicked.addEventListener('click', () =>{
    const color = HexaGenerator();
    document.body.style.backgroundColor = `#${color}`;
    output.value = color;
})
copytbtn.addEventListener('click', function(){
    if (isValid(output.value)){
        navigator.clipboard.writeText(`#${output.value}`);
        confiremationMessage(` #${output.value}Message Copied`);
    } else {
        alert("Invalid Color Code");
    }
    
})

function confiremationMessage (msg){
    const div= document.createElement('div');
    div.innerText = msg;
    div.className ='toast-message';
    document.body.appendChild(div);
    div.addEventListener('click', ()=>{
        div.remove();
    })
}
/**
 * 
 * @param {string} color 
 */
function isValid(color){
    if (color.length != 6) return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color);
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
const rndInt = randomIntFromInterval(16, 255)
console.log(rndInt)