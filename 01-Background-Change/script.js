const btn = document.querySelector('#btn');
const container = document.querySelector('.container')
console.log(btn);


function getColor() {
    const colorList = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += colorList[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    const color_item = getColor();
    // console.log(color_item);

    container.style.backgroundColor = `${color_item}`;
    btn.style.backgroundColor = `${color_item}`
}

btn.addEventListener('click', changeColor);
