const clock = () => {
    const hour = document.querySelector('#hour');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    const hr = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();

    hour.innerHTML = hr;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
}

const oneSecondInterval = setInterval(clock, 1000);