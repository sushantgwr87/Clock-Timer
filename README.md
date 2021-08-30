# Clock & Timer
A Digital Clock with **flip animation** and a timer with **dial animation** for representation of time left.

<p align="center">
    <a href="https://app.netlify.com/sites/clocktimer-sg/deploys"><img src="https://api.netlify.com/api/v1/badges/ff8d093e-b6e0-4878-b828-346d5778ec52/deploy-status" alt="Javascript" height="30" style="vertical-align:top; margin:4px"></a>
</p>

<p align="center">
    <img src="https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript" alt="Javascript" height="30" style="vertical-align:top; margin:4px">
    <img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" height="30" style="vertical-align:top; margin:4px">
    <img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3" alt="CSS" height="30" style="vertical-align:top; margin:4px">
</p>

## Algorithm
### Navigation
Tab navigation is used to navigate from clock and timer tab vice-versa.

### Flip Animation
Two flaps - one for top and other for bottom, are used to create flip top-bottom flap animation.

### Dial Animation
SVG was used to create the circle and then dasharray attribute was used to animate the circumference or filling of svg.

For more details - [Countdown Timer CSS-Tricks](https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/)

### Clock Time Calculation
Time was calculated using date object in javascript and formated to display as digital time.
```
var date = new Date();
var h = date.getHours(); // 0 - 23, 24 hour format
var m = date.getMinutes(); // 0 - 59
var s = date.getSeconds(); // 0 - 59
var session = "AM";
```
Converting to 12hr format time for digital clock time :
```
if(h == 0){
    h = 12;
}
    
if(h > 12){
    h = h - 12;
    session = "PM";
}
```
Double digit time formatting :
```
h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;
```
For more check - [clock.js](https://github.com/sushantgwr87/Clock-Timer/blob/main/clock.js)

## Styling
Neumorphism style was used for timer dial, navigation tabs and icon bar.
