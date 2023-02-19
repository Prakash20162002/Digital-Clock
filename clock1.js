const hours = document.getElementById("h");
const Minutes = document.getElementById("m");
const second = document.getElementById("s");
const session = document.getElementById("ses");
let dateandtime = document.getElementById("date");
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

function time() {
    let date = new Date();
    let Dat = date.getDate()
    let year = date.getFullYear();
    let months = date.getMonth();
    let day = date.getDay();



    var daysname = ["Saunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"];
    var monthsname = ["January", "February", "March", "April", "May", "June", "July", "August", "Septembar", "Octobar", "Novembar", "December"];

    date = (date < 10) ? "0" + date : date;


    dateandtime.innerHTML = daysname[day] + "," + monthsname[months] + Dat + "," + year;

    setInterval(time, 1040)

}
time();


