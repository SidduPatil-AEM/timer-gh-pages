hours = 1
mins = 2;
secs = mins * 60;
function countDown(){
    setTimeout('Decrement()',60);
}

function Decrement()
{
    minutes = document.getElementById('min');
    seconds = document.getElementById('sec');
    if(seconds < 59 ){
        seconds.value = secs;
    }else {
        minutes.value = getMinutes();
        seconds.value = getSeconds();
    }

    if(secs < 10){
        minutes.style.color = 'blue';
        seconds.style.color = 'blue'; 
        document.getElementById('msg').innerText = 'Hurray timer will complete soon';
    }
    if(mins < 0){
        alert('Timer Completed');
        minutes.value=00;
        seconds.value=00;
        document.getElementById('msg').innerText = 'Timer Completed!!';
    }else{
        secs--;
        console.log(secs);
        setTimeout('Decrement()',1000);
    }
    
}

getHours()
{
    hours = 
}

function getMinutes(){
    mins = Math.floor(secs / 60);
    return mins;
}

function getSeconds(){
    return secs - mins * 60;
}