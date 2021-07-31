// side bar
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

// countdown
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const promotime = new Date("August 05 2021 00:00:00");
// console.log(promotime);

function countdowntime(){

    const currenttime = new Date();
    // console.log(currenttime);

    const diff = promotime - currenttime; //const ko function htal mhr khaw ( block scope )
    // console.log(diff);

    const d = Math.floor( diff/1000/60/60/24);
    // console.log(d)

    const h = Math.floor( diff/1000/60/60) % 24;
    // console.log(h);

    const m = Math.floor( diff/1000/60) % 60;
    // console.log(m)

    const s = Math.floor(diff/1000) % 60;
    // console.log(s);

    days.innerText = d;
    hours.innerText = h < 10 ? "0"+h : h;
    minutes.innerText = m < 10 ? "0"+m : m;
    seconds.innerText = s < 10 ? "0"+s : s;
}

// countdowntime();

setInterval(countdowntime,1000);
