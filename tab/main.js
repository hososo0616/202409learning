'use strict';

const tabLabels = document.querySelectorAll('.tab__label li a');
const tabContents = document.querySelectorAll('.tab__content');

tabLabels.forEach( clickedLabel => {
  clickedLabel.addEventListener('click', e => {
    //リンクを無効化
    e.preventDefault();

    //タブラベルをすべてはずす
    tabLabels.forEach(label => {
      label.classList.remove('active');
    })

    //タブをアクティブにする
    clickedLabel.classList.add('active');

    tabContents.forEach(content => {
      content.classList.remove('active');
    })

    document.getElementById(clickedLabel.dataset.id).classList.add('active');


  })
})