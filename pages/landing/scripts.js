(function(win, doc){
  'use strict';
  const $nav = doc.querySelector('nav');
  const $navButton = doc.querySelector('nav button');
  const $content = doc.querySelector('#fullpage');

  $navButton.addEventListener('click', openNav, false);

  function openNav() {
    $nav.classList.toggle('opened');
    $content.classList.toggle('opened');
    $navButton.classList.toggle('opened');
    $navButton.firstElementChild.classList.toggle('fa-bars');
    $navButton.firstElementChild.classList.toggle('fa-times');
    
    doc.querySelectorAll('nav p').forEach(link => {
      link.classList.toggle('hidden');
    });

    const $navImg = doc.querySelector('nav img');
    $navImg.classList.toggle('opened');
    $navImg.parentElement.classList.toggle('opened');
  }
})(window, document);