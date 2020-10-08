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
      <article class="profile">
        <img src="${profile.avatar_url}">
        <div class="content">
          <h3>${profile.name}</h3>
          <p>${profile.bio}</p>
          <div class="btn-group">
            <a href="${profile.blog}"><i class="fab fa-linkedin"></i></a>
            <a href="${profile.html_url}"><i class="fab fa-github"></i></a>
          </div>
        </div>
      </article>
    `
    $githubSection.innerHTML += article;
  });

})(window, document)
