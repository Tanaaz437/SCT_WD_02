let[hours,minute,seconds]=[0,0,0];
let dispalyTime=document.getElementById("time");
let timer=null;
function updateTime(){
          seconds++;
          if(seconds==60){
                    seconds=0;
                    minute++;
          }
          if(minute==60){
                    minute=0;
                    hours++;
          }
          let h=hours<10?"0"+hours:hours;
          let m=minute<10?"0"+minute:minute;
          let s=seconds<10?"0"+seconds:seconds;
          dispalyTime.innerText=`${h}:${m}:${s}`;
}
document.getElementById("start").addEventListener('click',()=>{
          timer=setInterval(updateTime,100);
})
document.getElementById("pause").addEventListener('click',()=>{
          clearInterval(timer);
          timer=null;
})
document.getElementById("reset").addEventListener('click',()=>{
           clearInterval(timer);
          timer=null;
          [hours,minute,seconds]=[0,0,0];
          dispalyTime.innerText="00:00:00";
          document.getElementById("laps").innerText="";

})
document.getElementById("lap").addEventListener('click',()=>{
         let lapTime= dispalyTime.innerText;
         let li=document.createElement("li");
         li.innerText=lapTime;
         document.getElementById("laps").appendChild(li);

})