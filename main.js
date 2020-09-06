const clock = () => {
    const hour = document.querySelector('#hour');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();

    hr = (hr < 10) ? `0${hr}` : hr;
    min = (min < 10) ? `0${min}` : min;
    sec = (sec < 10) ? `0${sec}` : sec;

    hour.innerHTML = hr;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
}

const oneSecondInterval = setInterval(clock, 1000);