import data from './data';

const itemLS = "entrance-exam-web-js-master";

const editing = document.querySelectorAll('.editing');

editing.forEach(item => {
	item.addEventListener('click', (event) => {
		const htmlElement =  event.target;

		const newValue = prompt('Введите новое значение', '');

		if (!newValue || newValue.length <= 0) {
			return;
		}

		htmlElement.classList.add('animation')

		data[htmlElement.id] = newValue;

		localStorage.setItem(itemLS, JSON.stringify(data))

		htmlElement.textContent = newValue;
	})
})

editing.forEach(item => {
	item.addEventListener('animationend', (event) => {
		const htmlElement =  event.target;
		htmlElement.classList.remove('animation');
	})
})