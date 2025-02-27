/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value;

  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  var hour = parseInt(time.split(':')[0]);
  var minute = parseInt(time.split(':')[1][1]);

  if (time.indexOf(':') == -1) {
    return time;
  } else {
    if (hour < 12) {
      return 'Good Morning';
    } else if (hour >= 12 && hour <= 17) {
      return 'Good Afternoon';
    } else if (hour > 17) {
      return 'Good Evening';
    }
  }
}
/* Write your implementation of displayMessage() */
var h1 = document.querySelector('#greeting');

function displayMessage(message) {
  h1.innerText = message;
}
