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

$h3s.addEventListener('click', function (event) {
  if (event.target.className.includes('sunday')) {
    $scheduleHeading.textContent = 'Schedule Events for Sunday';
  }
  if (event.target.className.includes('monday')) {
    $scheduleHeading.textContent = 'Schedule Events for Monday';
  }
  if (event.target.className.includes('tuesday')) {
    $scheduleHeading.textContent = 'Schedule Events for Tuesday';
  }
  if (event.target.className.includes('wednesday')) {
    $scheduleHeading.textContent = 'Schedule Events for Wednesday';
  }
  if (event.target.className.includes('thursday')) {
    $scheduleHeading.textContent = 'Schedule Events for Thursday';
  }
  if (event.target.className.includes('friday')) {
    $scheduleHeading.textContent = 'Schedule Events for Friday';
  }
  if (event.target.className.includes('saturday')) {
    $scheduleHeading.textContent = 'Schedule Events for Saturday';
  }
});
