'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
// CLose Modal Function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// Open modal Function
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// Open modal when clicked in all the bottons through a Loop
console.log(btnOpenModal);
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);
// Close Modal  with clicking close botton
btnCloseModal.addEventListener('click', closeModal);
// Close Modal  with clicking overlay
overlay.addEventListener('click', closeModal);
// Close Modal with Esc
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
