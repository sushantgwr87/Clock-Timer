// openTab() function is to handle tab working in page
function openTab(evt, tabName) {
    var i, tabcontent, tab;
    tabcontent = document.getElementsByClassName("tabcontent");
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < tab.length; i++) {
      tab[i].className = tab[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// function to show time in flip digital clock
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    var merid;
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    // double digit time formatting
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    if(m==00 && s==00)
    { 
        hour = "<span class='flap flap-top flipTop'>" + (h-1==-1?h:(h-1<10?"0"+(h-1):h-1)) 
                + "</span><span class='flap flap-top'>" + h 
                + "</span><span class='flap flap-bottom flipBottom'>" + h
                + "</span><span class='flap flap-bottom'>" + (h-1==-1?h:(h-1<10?"0"+(h-1):h-1)) + "</span>";
        document.getElementById("hour").innerHTML = hour;
    }
    else
    {
        hour = "<span class='flap flap-top'>" + (h-1==-1?h:(h-1<10?"0"+(h-1):h-1))
            + "</span><span class='flap flap-top'>" + h
            + "</span><span class='flap flap-bottom'>" + h
            + "</span><span class='flap flap-bottom'>" + h + "</span>";
    
        document.getElementById("hour").innerHTML = hour;
    }
    if(s==00)
    {
        minute = "<span class='flap flap-top flipTop'>" + (m-1==-1?m:(m-1<10?"0"+(m-1):m-1))
                + "</span><span class='flap flap-top'>" + m
                + "</span><span class='flap flap-bottom flipBottom'>" + m
                + "</span><span class='flap flap-bottom'>" + (m-1==-1?m:(m-1<10?"0"+(m-1):m-1)) + "</span>";
        
        document.getElementById("minute").innerHTML = minute;
    }
    else
    {
        minute = "<span class='flap flap-top'>" + (m-1==-1?m:(m-1<10?"0"+(m-1):m-1))
                + "</span><span class='flap flap-top'>" + m
                + "</span><span class='flap flap-bottom'>" + m
                + "</span><span class='flap flap-bottom'>" + m + "</span>";
    
        document.getElementById("minute").innerHTML = minute;
    }    
    
    second = "<span class='flap flap-top flipTop'>" + (s-1==-1?s:(s-1<10?"0"+(s-1):s-1))
            + "</span><span class='flap flap-top'>" + s
            + "</span><span class='flap flap-bottom flipBottom'>" + s
            + "</span><span class='flap flap-bottom'>" + (s-1==-1?s:(s-1<10?"0"+(s-1):s-1)) + "</span>";
    
    document.getElementById("second").innerHTML = second;
        
    if(merid!=session)
    {
        ses = "<span class='flap flap-top flipTop'>" + session
            + "</span><span class='flap flap-top'>" + session
            + "</span><span class='flap flap-bottom flipBottom'>" + session
            + "</span><span class='flap flap-bottom'>" + session + "</span>";
        
        document.getElementById("session").innerHTML = ses;
        merid = session;
    }
    ses = "<span class='flap flap-top'>" + session
        + "</span><span class='flap flap-top'>" + session
        + "</span><span class='flap flap-bottom'>" + session
        + "</span><span class='flap flap-bottom'>" + session + "</span>";
    
    document.getElementById("session").innerHTML = ses;
    // calling time function in every 1 sec duration
    setTimeout(showTime, 1000); 
}
// time function will run as soon as page is loaded due to this default call at the end
showTime();

//Modal working code
var modal = document.getElementById("settingModal");
var btn = document.getElementById("setting");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//modal code ends here

// Timer function starts

// all varaible declaration
const time = document.getElementById("timer_label");    //to diplay timer
const condition = document.getElementById("condition"); //to display condition start,pause or time-up
let timePassed = 0, timeLimit = 25*60;
let timeLeft = 25*60, timerInterval = null;
const FULL_DASH_ARRAY = 283;    //total circumference of svg circle splitted in dasharray
let trigger =false;

// to format time in minute:second format for timer
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = "0"+seconds;
    }
    return (minutes+":"+seconds);
}

// Update the dasharray value as time passes, starting with 283
function setCircleDasharray(calTime) {
  const circleDasharray = (calTime * FULL_DASH_ARRAY).toFixed(0)+" "+283;
  document.getElementById("svg-timer-circle").setAttribute("stroke-dasharray", circleDasharray);
}

// main function to display and update time
function timer(newLimit) {
    timeLeft = newLimit;
    timeLimit = newLimit;
    timePassed = 0;

    setCircleDasharray(timeLeft/timeLimit);
    timerInterval = setInterval(() => {
        if(trigger)
        {
            timeLeft = timeLimit - timePassed;
            timePassed += 1;

            if(timeLeft==0){
                clearInterval(timerInterval);
                condition.innerHTML = "TIME UP!";
                trigger = false;
            }

            let rawTime = timeLeft/timeLimit - ((1 / timeLimit) * (1 - timeLeft/timeLimit));
            setCircleDasharray(rawTime);
        }
        time.innerHTML = formatTime(timeLeft);
    }, 1000);
}
timer(25);

// form values to update time
const form = document.getElementById("timeform");   //to access setting's modal form

const min = form.elements['minutes'];   //minutes input
const sec = form.elements['seconds'];   //seconds input

//radio color input for svg circle
let coloring = document.querySelector('input[type="radio"]:checked').value;
//changing svg color as per input
document.getElementById("svg-timer-circle").setAttribute("stroke", coloring);

let m,s;//global variables to handle minute and seconds input respectively

// event listener to catch any form submission
form.addEventListener("submit", function (event) {
	// stop default form submission
	event.preventDefault();

    coloring = document.querySelector('input[type="radio"]:checked').value;
    document.getElementById("svg-timer-circle").setAttribute("stroke", coloring);

    // checking if input is empty or not
	m = (min.value == "" || min.value == null) ? timeLeft/60 : parseInt(min.value);
    s = (sec.value == "" || sec.value == null) ? 0 : parseInt(sec.value);

    // converting whole time into seconds
    const updatedLimit = m*60+s;

    // clearing setInterval for refresh or reset start of time if changed
    clearInterval(timerInterval);

    trigger =false;     //stopping default start of timer

    timer(updatedLimit);    // updating input timer

    condition.innerHTML = "START!"; // changing state of timer
    modal.style.display = "none";   //hiding or closing setting's modal after submission
    
    //resetting input values
    min.value = "";
    sec.value = "";
});

const dial = document.getElementById("dialClick");
condition.innerHTML = "START!"  //default state of timer

// event listener to catch click on dial to start or stop timer
dial.addEventListener('click', function(e) {
    if(time.innerHTML == "0:00")
    {
        trigger = false;
        modal.style.display = "block";
    }
    else
    {
        if(condition.innerHTML == "START!")
        {
            trigger = true;
            condition.innerHTML = "PAUSE";
        }
        else if(condition.innerHTML == "PAUSE")
        {
            trigger = false;
            condition.innerHTML = "START!";
        }
        else if(condition.innerHTML == "TIME UP!")
        {
            modal.style.display = "block";
            condition.innerHTML = "START!";
        }
    }
});