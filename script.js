const daysEl=document.getElementById("days"),hoursEl=document.getElementById("hours"),minsEl=document.getElementById("mins"),secondsEl=document.getElementById("seconds"),newYears="21 March 2023 00:54:00";function countdown(){var e=new Date(newYears),n=new Date;console.log(n);var o=(e-n)/1e3,t=Math.floor(o/3600/24),e=Math.floor(o/3600)%24,n=Math.floor(o/60)%60,o=Math.floor(o)%60;daysEl.innerHTML=t,hoursEl.innerHTML=formatTime(e),minsEl.innerHTML=formatTime(n),secondsEl.innerHTML=formatTime(o)}function formatTime(e){return e < 10 ? `0${e}` : e;}countdown(),setInterval(countdown,1e3);
