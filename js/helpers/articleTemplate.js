export const articleTemplate = (title, body, generateId) =>
  `<article class="post active" data-id="${generateId()}" likes-count="0"><h3 class="post-title">${title}</h3><button class="delete-article">delete post</button><div class="post-content">${body}</div><span class="remove like">-</span><span class="likes-count"></span><span class="add like">+</span><hr>
  </article>`;
