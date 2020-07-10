var min = 0;
var sec = 0;
var msec = 0;
var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var millisec = document.getElementById("msec");
var interval;
function timer(){
    msec++;
    millisec.innerHTML = msec;
    if(msec >=100){
        sec++;
        seconds.innerHTML= sec;
        msec = 0;
    } else if(sec >= 60){
        min++
        minutes.innerHTML = min;
        sec = 0
    }
}
function start(){
    clearInterval(interval);
interval = setInterval(timer,10);

}
function stop(){
    clearInterval(interval);
}
function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    millisec.innerHTML = msec;
    stop();
}
