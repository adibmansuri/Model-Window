'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosemodel = document.querySelector('.close-modal');
const btnopenmodel = document.querySelectorAll('.show-modal');
console.log(btnopenmodel);
for (let i = 0; i < btnopenmodel.length; i++)
  console.log(
    btnopenmodel[i].addEventListener('click', function () {
      console.log('button click');
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    })
  );
