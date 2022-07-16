/** @format */

const body = document.querySelector('body');

const nav = document.querySelectorAll('.navbar');

const menu = document.querySelectorAll('.toggle');

const slides = document.querySelectorAll('.header-content');

const nextBtn = document.querySelectorAll('.icon2');

const prevBtn = document.querySelectorAll('.icon1');

let auto = true;

let interv = 8000;

let slideInterv;

// toggle menu

// Hero Slides
const nextButton = () => {
   const current = document.querySelector('.current');

   current.classList.remove('current');

   if (current.nextElementSibling) {
      current.nextElementSibling.classList.add('current');
   } else {
      slides[0].classList.add('current');
   }
   setTimeout(() => current.classList.remove('current'));
};

const prevButton = () => {
   const current = document.querySelector('.current');

   current.classList.remove('current');

   if (current.previousElementSibling) {
      current.previousElementSibling.classList.add('current');
   } else {
      slides[slides.length - 1].classList.add('current');
   }

   setTimeout(() => current.classList.remove('current'));
};

for (const nextBtnn of nextBtn) {
   nextBtnn.addEventListener('click', function () {
      if (auto) {
         clearInterval(slideInterv);
         slideInterv = setInterval(nextButton, interv);
      }
      nextButton();
      for (const navs of nav) {
         navs.classList.remove('show');
      }
      for (const menus of menu) {
         menus.classList.remove('close');
      }
   });
}
for (const prevBtnn of prevBtn) {
   prevBtnn.addEventListener('click', function () {
      if (auto) {
         clearInterval(slideInterv);
         slideInterv = setInterval(nextButton, interv);
      }
      prevButton();
      for (const navs of nav) {
         navs.classList.remove('show');
      }
      for (const menus of menu) {
         menus.classList.remove('close');
      }
   });
}

for (const menus of menu) {
   menus.addEventListener('click', () => {
      for (const menus of menu) {
         menus.classList.toggle('close');
      }

      for (const navs of nav) {
         navs.classList.toggle('show');
      }
   });
}

if (auto) {
   slideInterv = setInterval(nextButton, interv);
}
