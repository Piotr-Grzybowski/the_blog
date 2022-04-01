export const articleTemplate = (title, body, generateId) =>
  `<article class="post" data-id="${generateId()}" likes-count="0">
  <div class="post-content">
    <h2 class="post-title">${title}</h2>
    <p>${body}</p>
  </div>
  <div class="delete-article">Remove X</div>
  <div class="likes-area"><span class="remove like">-</span><span class="likes-count"></span><span class="add like">+</span></div>
</article>`;
