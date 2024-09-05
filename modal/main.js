'use strict';

const modal = document.getElementById('modal');
const show = document.getElementById('modal__show');
const backgroud = document.getElementById('modal__background');
const close = document.getElementById('modal__close');

show.addEventListener('click', () => {
  modal.classList.add('is-show');
  backgroud.classList.add('is-show');
})

close.addEventListener('click', () => {
  modal.classList.remove('is-show');
  backgroud.classList.remove('is-show');
})

backgroud.addEventListener('click', () => {
  close.click();
})