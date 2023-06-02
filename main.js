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
