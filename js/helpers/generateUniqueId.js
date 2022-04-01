export function generateUniqueId() {
  const allArticles = document.querySelectorAll(".post");
  let highestId = 0;

  for (let article of allArticles) {
    if (parseInt(article.getAttribute("data-id")) > highestId)
      highestId = parseInt(article.getAttribute("data-id"));
  }
  return highestId + 1;
}
