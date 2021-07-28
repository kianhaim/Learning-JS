'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////
/////////////////////////////////////
//////////////////////////////

// Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
const allSelector = document.querySelectorAll('.selector');
console.log(allSelector);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');

console.log(allButton);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting Elements

const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie-message">Got It</button>';

// header.prepend(message); // put message before header as a child

header.append(message); // put message after the header as a child

//header.append(message.cloneNode(true)); // put the message after the header as a child and clone it to appear on 2 places.

// header.before(message); // put the message before the header as a sibling(not nested inside the header)
// header.after(message); // put the message after the header as a sibling(not nested inside the header)

// Delete Elements

document
  .querySelector('btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message); // old method
  });
