let todos = [];

const previousTodosJSON = localStorage.getItem(‘javascript-local-storage’);
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}
function handleUnload(event) {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem(‘javascript-local-storage’, todosJSON);
}
window.addEventListener(‘beforeunload’, handleUnload);




const $background = document.querySelector('.hidden');
const $openModal = document.querySelector('.open-modal');
const $closeModal = document.querySelector('.close-modal');

function openButton(event) {
  $background.className = 'background';
}

function closeButton(event) {
  $background.className = 'background hidden';
}

$openModal.addEventListener('click', openButton);
$closeModal.addEventListener('click', closeButton);

const $form = document.querySelector('form');
$form.addEventListener('submit', function (event) {
  event.preventDefault();

  const todo = {
    day: $form.elements.day.value,
    time: $form.elements.time.value,
    description: $form.elements.description.value
  };

  todos.push(todo);

});
