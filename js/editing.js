import data from './data';

const itemLS = 'entrance-exam-web-js-master';
const editing = document.querySelectorAll('.editing');
const waveContainerElements = document.querySelectorAll('.wave-container');

waveContainerElements.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    const className = 'wave-active';
    if (elem.classList.contains(className)) {
      elem.classList.remove(className);
    }

    const currentWaveContainerElement = event.currentTarget;
    const waveCurrentElement = currentWaveContainerElement.querySelector('.wave');
    const targetElement = event.target;

    if (targetElement.classList.contains('editing')) {
      const newValue = prompt('Enter new value', '');

      if (!newValue || newValue.length <= 0) {
        return;
      }

      targetElement.classList.add('animation');
      data[targetElement.id] = newValue;
      localStorage.setItem(itemLS, JSON.stringify(data));
      targetElement.textContent = newValue;
    } else {
      waveCurrentElement.style.left = `${event.clientX - currentWaveContainerElement.offsetLeft}px`;
      waveCurrentElement.style.top = `${event.clientY - currentWaveContainerElement.offsetTop}px`;
      elem.classList.add(className);
    }
  });
});

editing.forEach((item) => {
  item.addEventListener('animationend', (event) => {
    const htmlElement = event.target;
    htmlElement.classList.remove('animation');
  });
});
