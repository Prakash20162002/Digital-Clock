const hours = document.getElementById("h");
const Minutes = document.getElementById("m");
const second = document.getElementById("s");
const session = document.getElementById("ses");
function Showtime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ses = "AM";


    if (h == 0) {
        h = 12;

    }


    if (h > 12) {
        h = h - 12
        ses = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    Minutes.innerHTML = m;
    second.innerHTML = s;
    session.innerHTML = ses;




    setInterval(Showtime, 1000);


}
Showtime();
