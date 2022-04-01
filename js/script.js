"use strict";

import { articleTemplate } from "./helpers/articleTemplate.js";
import { notifySuccess, notifyError } from "./helpers/notification.js";
import { generateUniqueId } from "./helpers/generateUniqueId.js";

const select = {
  allArticles: ".posts",
  singleArticle: ".post",
  createForm: ".create-form",
  removeArticleLinks: ".delete-article",
  likesCount: ".likes-count",
  likesCounterButtons: ".like",
  importButton: ".import-articles-btn",
  articlesCount: ".articles-count"
};

function initNewArticles() {
  addEventListenersToDeleteButtons();
  showLikesCounts();
  addEventListenersToLikes();
  countArticles();
}

function createArticle(title, body) {
  const articles = document.querySelector(select.allArticles);
  const html = articleTemplate(title, body, generateUniqueId);
  const givenId = html.match(/data-id="(.*?)"/m)[1];

  articles.insertAdjacentHTML("beforeend", html);
  if (document.querySelector(`article[data-id="${givenId}"]`)) notifySuccess();
  else notifyError();

  initNewArticles();
}

function removeArticle(event) {
  const articleToRemove = document.querySelector(
    `article[data-id="${event.target.parentElement.getAttribute("data-id")}"]`
  );
  articleToRemove.remove();
  countArticles();
}

function countArticles() {
  const articlesCount = document.querySelector(select.articlesCount);
  const articlesAmount = document.querySelectorAll(select.singleArticle).length;

  articlesCount.innerHTML = articlesAmount;
}

function showLikesCounts() {
  const likeCounters = document.querySelectorAll(select.likesCount);

  for (let likeCounter of likeCounters) {
    likeCounter.innerHTML =
      likeCounter.parentElement.getAttribute("likes-count");
  }
}

function changeLikesCount(event) {
  const currentElement = event.target;
  const parentElement = event.target.parentNode;
  const likesCountNode = document.querySelector(
    `article[data-id="${parentElement.getAttribute("data-id")}"]`
  );
  const likesCountValue = parentElement.getAttribute("likes-count");

  if (currentElement.classList.contains("add")) {
    likesCountNode.setAttribute("likes-count", parseInt(likesCountValue) + 5);
  } else if (currentElement.classList.contains("remove")) {
    likesCountNode.setAttribute("likes-count", parseInt(likesCountValue) - 10);
  }
  showLikesCounts();
}

function importArticles() {
  const importBtn = document.querySelector(".import-articles-btn");

  fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((articles) => {
      for (let article of articles) {
        createArticle(article.title, article.body);
      }
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
  importBtn.setAttribute("hidden", true);
}

// Event listeners
function addEventListenersToLikes() {
  const likesButtons = document.querySelectorAll(select.likesCounterButtons);

  for (let likesButton of likesButtons) {
    likesButton.addEventListener("click", changeLikesCount);
  }
}

function addEventListenersToDeleteButtons() {
  const links = document.querySelectorAll(select.removeArticleLinks);

  for (let link of links) {
    link.addEventListener("click", removeArticle);
  }
}

document
  .querySelector(select.importButton)
  .addEventListener("click", importArticles, { once: true });

document
  .querySelector(select.createForm)
  .addEventListener("submit", (event) => {
    event.preventDefault();
    createArticle(event.target[0].value, event.target[1].value);
  });

initNewArticles();
