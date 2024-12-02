window.addEventListener('load',getNextYear);
// setInterval(updateTime, 1000);



function getNextYear(){
    const currentDate = new Date();
    let nextYear = document.getElementById('nextYear');

    nextYear.innerText = currentDate.getFullYear() + 1;

    setInterval(updateTime, 1000);

}

function updateTime(){
    const currentDate = new Date();
    let newYear = new Date(currentDate.getFullYear() + 1, 0,1);

    let difference = newYear.getTime() - currentDate.getTime();

    let days = document.getElementById('days');
    let hours= document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    days.innerText = Math.floor(difference / 86_400_000);
    let iTemp = difference % 86_400_000;
    hours.innerText = Math.floor(iTemp / 3_600_000);
    iTemp = iTemp % 3_600_000;
    minutes.innerText = Math.floor(iTemp / 60_000);
    iTemp = iTemp % 60_000;
    seconds.innerText = Math.floor(iTemp / 1000);


    }
