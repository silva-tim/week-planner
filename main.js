// data.js
let todos = {
  // todoArrMonday: [],
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: []
};

const previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}
function handleUnload(event) {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}
window.addEventListener('beforeunload', handleUnload);
//

const $form = document.querySelector('form');
const $background = document.querySelector('.hidden');
const $openModalButton = document.querySelector('.open-modal');
const $closeModalButton = document.querySelector('.close-modal');
const $scheduleHeading = document.querySelector('#schedule-heading');
const $h3s = document.querySelector('.days');

$openModalButton.addEventListener('click', event => {
  $background.className = 'background';
});
$closeModalButton.addEventListener('click', event => {
  $background.className = 'background hidden';
});

// document.addEventListener('DOMContentLoaded', function (e) {
//   for (let i = 0; i < data.entries.length; i++) {
//     renderEntry(data.entries[i]);
//   }
// });

$form.addEventListener('submit', function (event) {
  event.preventDefault();

  const todo = {
    day: $form.elements.day.value,
    time: $form.elements.time.value,
    description: $form.elements.description.value
  };

  const weekday = todo.day.toLowerCase();
  for (const key in todos) {
    if (key === weekday) {
      todos[key].push(todo);
    }
  }

});

function unRender() {
  const $trs = document.querySelectorAll('tr.remove');
  $trs.forEach(function (element) {
    element.remove();
  });
}

$h3s.addEventListener('click', function (event) {
  unRender();
  if (event.target.className.includes('sunday')) {
    $scheduleHeading.textContent = 'Schedule Events for Sunday';
    renderEntry(todos.sunday);
  }
  if (event.target.className.includes('monday')) {
    $scheduleHeading.textContent = 'Schedule Events for Monday';
    renderEntry(todos.monday);
  }
  if (event.target.className.includes('tuesday')) {
    $scheduleHeading.textContent = 'Schedule Events for Tuesday';
    renderEntry(todos.tuesday);
  }
  if (event.target.className.includes('wednesday')) {
    $scheduleHeading.textContent = 'Schedule Events for Wednesday';
    renderEntry(todos.wednesday);
  }
  if (event.target.className.includes('thursday')) {
    $scheduleHeading.textContent = 'Schedule Events for Thursday';
    renderEntry(todos.thursday);
  }
  if (event.target.className.includes('friday')) {
    $scheduleHeading.textContent = 'Schedule Events for Friday';
    renderEntry(todos.friday);
  }
  if (event.target.className.includes('saturday')) {
    $scheduleHeading.textContent = 'Schedule Events for Saturday';
    renderEntry(todos.saturday);
  }
});

const $tbody = document.querySelector('tbody');

function renderEntry(array) {
  for (let i = 0; i < array.length; i++) {
    const $tr = document.createElement('tr');
    const $td1 = document.createElement('td');
    const $td2 = document.createElement('td');

    $tr.classList.add('remove');

    $td1.textContent = array[i].time;
    $td2.textContent = array[i].description;

    $tr.append($td1, $td2);
    $tbody.append($tr);
  }
}
