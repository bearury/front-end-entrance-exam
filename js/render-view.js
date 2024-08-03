import data from './data';

const itemLS = "entrance-exam-web-js-master";
const dateLS = JSON.parse(localStorage.getItem(itemLS));

const greetingPhrase = document.querySelector('#greetingPhrase')
const greetingName = document.querySelector('#greetingName')
const greetingRole = document.querySelector('#greetingRole')

function setTextContext (d) {
	greetingPhrase.textContent = d.greetingPhrase;
	greetingName.textContent = d.greetingName;
	greetingRole.textContent = d.greetingRole;
}


if (dateLS) {
	setTextContext(dateLS)
} else {
	setTextContext(data)
}




