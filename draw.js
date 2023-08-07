const sliderValue = document.querySelector('#slider');
const sliderValueText = document.querySelector('.size');
const color = document.querySelector('#color');
const canvas = document.querySelector('#canvas');
const clear = document.querySelector('#clear');
const eraser = document.querySelector('#eraser');
const backgroundColor = document.querySelector('#background-color');
const body = document.querySelector('#body');
const expand = document.querySelector('.expand');
const toolbox = document.querySelector('.toolbox');
expand.addEventListener('click', ()=>{
    toolbox.classList.toggle('show');

});
const ctx = canvas.getContext('2d');
ctx.lineCap = 'round';
let x;
let y;
ispressed = false;
iserasing = false;
sliderValueText.innerHTML = sliderValue.value;
ctx.lineWidth = sliderValue.value * 2
backgroundColor.oninput = ()=>{
    canvas.style.backgroundColor = backgroundColor.value;
    body.style.backgroundColor = backgroundColor.value
}
sliderValue.oninput = () => {
    sliderValueText.innerHTML = sliderValue.value;
    ctx.lineWidth = sliderValue.value * 2
};
color.oninput = ()=>{
    console.log(color.value)
    ctx.strokeStyle=color.value;
}

canvas.addEventListener('mousedown', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    ispressed = true;
})

canvas.addEventListener('mouseup', () => {
    x = undefined;
    y = undefined;
    ispressed = false;
});

canvas.addEventListener('mousemove', (e) => {
    if (ispressed) {
        
        if (iserasing){
            let x2 = e.offsetX;
            let y2 = e.offsetY;
            erase(x2,y2);
            console.log(x2,y2);
        }else{
            let x2 = e.offsetX;
            let y2 = e.offsetY;
            draw(x,y,x2,y2);
            x = x2
            y = y2
        }

    }
})

clear.addEventListener('click', () => {
    console.log('clear')
    console.log(canvas.width,canvas.height)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})
eraser.addEventListener('click', () => iserasing=true)
function draw(x1,y1,x2,y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke()
}

function erase(x2,y2) {
    const x3 = x2 -(sliderValue.value /2);
    const y3 = y2 - (sliderValue.value /2);
    ctx.clearRect(x3,y3,sliderValue.value,sliderValue.value);
}

