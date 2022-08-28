'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosemodel = document.querySelector('.close-modal');
const btnopenmodel = document.querySelectorAll('.show-modal');

const openmodel = function () {
  console.log('button click');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closemodel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnopenmodel.length; i++)
  console.log(btnopenmodel[i].addEventListener('click', openmodel));

btnClosemodel.addEventListener('click', closemodel);
overlay.addEventListener('click', closemodel);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closemodel();
    }
  }
});
