function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn').addEventListener('click', convert);
    let hoursBtn = document.getElementById('hoursBtn').addEventListener('click', convert);
    let minutesBtn = document.getElementById('minutesBtn').addEventListener('click', convert);
    let secondsBtn = document.getElementById('secondsBtn').addEventListener('click', convert);
    function convert() {
        let days = Number(document.getElementById('days').value);
        let hours =Number(document.getElementById('hours').value);
        let minutes = Number(document.getElementById('minutes').value);
        let seconds = Number(document.getElementById('seconds').value);
        if(days !== 0){
            hours = days*24;
            minutes = hours*60;
            seconds = minutes*60;
        }else if(hours!== 0){
            minutes = hours*60;
            seconds = minutes*60;
            days = hours/24;
        }else if(minutes !== 0){
            seconds = minutes*60;
            hours = minutes/60;
            days = hours/24;
        }else if (seconds !== 0){
            minutes = seconds/60;
            hours = minutes/60;
            days = hours/24;
        }
        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }
}