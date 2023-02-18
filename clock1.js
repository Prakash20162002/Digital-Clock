const hours = document.getElementById("h");
const Minutes = document.getElementById("m");
const second = document.getElementById("s");
const session = document.getElementById("ses");
// const dateandtime = document.querySelector("dateandtime");
function Showtime() {
    var date = new Date();
    // var date = date.getDate()
    // var year = date.getFullYear();
    // var months = date.getMonth();
    // var day = date.getDay();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ses = "AM";


    // var daysname = ["Saunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"];
    // var monthsname = ["January", "February", "March", "April", "May", "June", "July", "August", "Septembar", "Octobar", "Novembar", "December"];

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
    // date = (date < 10) ? "0" + date : date;

    hours.innerHTML = h;
    Minutes.innerHTML = m;
    second.innerHTML = s;
    session.innerHTML = ses;
    // dateandtime.innerHTML = daysname[day] + "," + monthsname[months] + date + "," + year;




    setInterval(Showtime, 1000);


}
Showtime();
