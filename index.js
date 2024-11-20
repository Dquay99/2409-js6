let getipvalue = document.getElementById('inputvalue');
let getbtn = document.getElementById('btn');

let dpcd = document.getElementById('display-cd')

function time(){
    let min = getipvalue.value;
    let sec = min * 60 ;

    const countdown = setInterval(function(){
        let minnumber = Math.floor(sec / 60);
        let secnumber = sec % 60 ;
        let displaysec = "00";

        if(secnumber !== 0){
            displaysec = secnumber ;
        }

        if(secnumber !== 0 && secnumber<10 ){
            displaysec  = `0${secnumber}`
        }

        dpcd.textContent = `${minnumber}:${displaysec}`;
        sec--;
        if(sec<0){
            clearInterval(countdown);
        }
    },1000)
}
getbtn.addEventListener('click',time);
