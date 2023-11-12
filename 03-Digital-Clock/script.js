const clock = document.getElementById('time');
const period = document.querySelector('#period')
console.log(clock);


const intervalId = setInterval(() => {
    const time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    let check = true;

    
    if(hour >= 12){
        check = false;
    }
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour === 0 ? 12 : hour;
    hour = hour < 10 ? `0${hour}` : hour;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    clock.textContent = `${hour}:${minutes}:${seconds}`;
    
    period.textContent = check ? 'AM' : 'PM';

    
}, 1000);


