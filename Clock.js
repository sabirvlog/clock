setInterval(setClock,1000);
 /*we set the interval for a certain function because we want to call a certain function every second and we are just going to call this set o'clock for every 1000 miliseconds we are going to call this function. */

 const hourHand = document.querySelector('[data-hour-hand]');
 const minuteHand = document.querySelector('[data-minute-hand]');
 const secondHand = document.querySelector('[data-second-hand]');

function setClock(){
	const currentDate = new Date();
	const secondsRatio= currentDate.getSeconds() /60;
	const minutesRatio= (secondsRatio + currentDate.getMinutes()) /60;
	const hoursRatio= (minutesRatio + currentDate.getHours()) /12;
	setRotation(secondHand, secondsRatio);
	setRotation(minuteHand, minutesRatio);
	setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
	element.style.setProperty('--rotation', rotationRatio * 360);
}
setClock();


// setInterval(setClock, 1000)

// const hourHand = document.querySelector('[data-hour-hand]')
// const minuteHand = document.querySelector('[data-minute-hand]')
// const secondHand = document.querySelector('[data-second-hand]')

// function setClock() {
//   const currentDate = new Date()
//   const secondsRatio = currentDate.getSeconds() / 60
//   const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
//   const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
//   setRotation(secondHand, secondsRatio)
//   setRotation(minuteHand, minutesRatio)
//   setRotation(hourHand, hoursRatio)
// }

// function setRotation(element, rotationRatio) {
//   element.style.setProperty('--rotation', rotationRatio * 360)
// }

// setClock()
