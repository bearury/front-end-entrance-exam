import data from './data';

const itemLS = 'entrance-exam-web-js-master';
const dateLS = JSON.parse(localStorage.getItem(itemLS));

const editingElements = document.querySelectorAll('.editing');

function setTextContext(d) {
  editingElements.forEach((editElement) => {
    editElement.textContent = d[editElement.id];
  });
}

if (dateLS) {
  for (const key in dateLS) {
    data[key] = dateLS[key];
  }

  setTextContext(dateLS);
} else {
  setTextContext(data);
}
