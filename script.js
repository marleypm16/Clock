const clock_hours = document.querySelector(".hour");
const clock_minutes = document.querySelector(".minutes");

const clock_seconds = document.querySelector('.seconds')

const dia = document.querySelector('.dia')

const city = document.querySelector('.city')

const get_Hour = () => {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

    clock_hours.innerHTML = hour
    if(minutes < 10){
        clock_minutes.innerHTML = `0${minutes}`
    }
    else if(seconds < 10){
        clock_seconds.innerHTML = `0${seconds}`
    }
    else{
        clock_minutes.innerHTML = minutes
        clock_seconds.innerHTML = seconds
    }
};

setInterval(() => {
  get_Hour();
}, 1000);















