'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

// Scroll to a section/ Scroll Button

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log('Current scroll (X/Y', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling - to the current position + the current scroll

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // Old way of selection to scroll on a webpage selection

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //New method of scrolling Into view
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

/////////////////////////////
/////////////////////////////////////
//////////////////////////////

// Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

//document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');

console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting Elements

const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got It</button>';

// put message before header as a child
//header.prepend(message);

// put message after the header as a child
header.append(message);

//header.append(message.cloneNode(true)); // put the message after the header as a child and clone it to appear on 2 places.

// header.before(message); // put the message before the header as a sibling(not nested inside the header)
// header.after(message); // put the message after the header as a sibling(not nested inside the header)

// Delete Elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    //message.parentElement.removeChild(message);
  });

// Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// Cant get the style if not declared on CSS
console.log(message.style.color);
console.log(message.style.background);
// USe getComputedStyle  if you really want to get the style
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

/// Setting CSS properties using JS

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attribute

// Only gets the standard properties
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

//Non standard

console.log(logo.designer);

// How to get the non standard attributes

console.log(logo.getAttribute('designer'));

// Setting Attribute

logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);

// setAttribute;
logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('company'));

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');

console.log(link.href);
console.log(link.getAttribute('href'));

//Data Attribute

console.log(logo.dataset.versionNumber);

// Classes

logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

//DOnst USE
//logo.className = 'jonas'

// MORE EVENT LISTENER

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener Alert');
  ////////////Remove event listener - triggers the event once
  h1.removeEventListener('mouseenter', alertH1);
  //////////// Removing the event listener using timeout - 5 SECONDS
  setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 1000);
};

h1.addEventListener('mouseenter', alertH1);

//////////////// Old method of listening for events////////////
// h1.onmouseenter = function (e) {
// alert('On mouse enter Event')
//};
