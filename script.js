function showTime() {
  var d = new Date()
  var day = new Date().getDay()

  var hour = new Date().getHours()
  var minute = new Date().getMinutes()
  var second = new Date().getSeconds()
  let ampm = document.querySelector('.am-pm')




  let getHour = document.querySelector('.hour')
  let getMinute = document.querySelector('.minute')
  let getSecond = document.querySelector('.seconds')

  getHour.textContent = hour
  getMinute.innerHTML = minute
  getSecond.textContent = second




  if (second < 10) {
    getSecond.innerHTML = `0${second}`
  }

  if (minute < 10) {
    getMinute.innerHTML = `0${minute}`
  }

  if (hour < 10) {
    getHour.innerHTML = `0${hour}`
  }



  /* var x = new Date(2018, 11, 24, 23, 33);
  
  console.log(x) */






  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


  for (let i = 0; i <= days.length; i++) {

    let d = days[i]

    if (days.indexOf(d) == day) {

      let curDay = days[i]
      var selectedDay = document.querySelector(`.${curDay}`)
      selectedDay.classList.add('green-colour')

    }
  }

  setTimeout(showTime, 1000)
}










function showTime2() {

  var d = new Date()
  var day = new Date().getDay()

  var hour = new Date().getHours()
  var minute = new Date().getMinutes()
  var second = new Date().getSeconds()

  let getHour = document.querySelector('.hour')
  let getMinute = document.querySelector('.minute')
  let getSecond = document.querySelector('.seconds')
  let ampm = document.querySelector('.am-pm')


  var d = new Date();

  var htmlHour = d.toLocaleString([], {
    hour: 'numeric',


  });




  var htmlMinute = d.toLocaleString([], {
    minute: '2-digit',

  });
  getMinute.innerHTML = htmlMinute;

  var htmlsecond = d.toLocaleString([], {
    second: '2-digit',

  });
  getSecond.innerHTML = htmlsecond;

  var hours = d.getHours();

  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  getHour.innerHTML = hours;


  if (d.getHours() < 12) {
    ampm.innerHTML = "AM"
  } else {
    ampm.innerHTML = "PM"
  }






  if (minute < 10) {
    getMinute.innerHTML = `0${minute}`
  }

  if (second < 10) {
    getSecond.innerHTML = `0${second}`
  }

  if (hour < 10) {
    getHour.innerHTML = `0${hour}`
  }

  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


  for (let i = 0; i <= days.length; i++) {

    let d = days[i]

    if (days.indexOf(d) == day) {

      let curDay = days[i]
      var selectedDay = document.querySelector(`.${curDay}`)
      selectedDay.classList.add('green-colour')

    }
  }


  setTimeout(showTime2, 1000)
}

/* function buttonsystem() {
  const body = document.body;
  body.onload = showTime2();
  var selectedFormat = document.querySelector(.12-tag)
  selectedFormat.classList.add('green-colour')

}

function buttonsystem2() {
  const body = document.body;
  body.onload = showTime();


} */


// First load Line//
/* document.addEventListener("DOMContentLoaded", () => {
  showTime()
}) */









