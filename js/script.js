function updateDateTime() {
	const datetimeElement = document.getElementById("datetime");
	const now = new Date();
	datetimeElement.textContent = now.toLocaleString(); // Customize the date and time format as desired
}

// Call the function to update the date and time immediately when the page loads
updateDateTime();

// Update the date and time every second using setInterval
setInterval(updateDateTime, 1000);

function updateClock() {
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, "0");
	const minutes = String(now.getMinutes()).padStart(2, "0");
	const seconds = String(now.getSeconds()).padStart(2, "0");
	const date = now.toDateString();

	const clockElement = document.getElementById("clock");
	clockElement.textContent = `${hours}:${minutes}:${seconds} ${date}`;
}

setInterval(updateClock, 1000);
