(function(win, doc){
  'use strict';

  const $githubSection = doc.querySelector('#github');

  const urls = [
    'https://api.github.com/users/freirart',
    'https://api.github.com/users/MartinObrecht',
    'https://api.github.com/users/beatricoli',
    'https://api.github.com/users/PamAvelar',
  ];

  urls.forEach(async function(url){
    const profile = await (await fetch(url)).json();
    const article = `
      <article>
        <h3>${profile.name}</h3>
        <img src="${profile.avatar_url}">
      </article>
    `
    $githubSection.innerHTML += article;
  });

})(window, document)