import { fetchPosts } from "./dataHandling/fetchPosts";
import { renderPosts } from "./features/renderPosts";
import { filterPostsByButton } from "./features/filterPosts";
import {filterPostsByKeyword } from "./features/searchPosts"
import { sortPosts } from "./features/sortPosts";
import { Post } from "./dataHandling/types";

const searchInput = document.querySelector<HTMLInputElement>(".search-box input")!;
const searchButton = document.querySelector<HTMLButtonElement>(".search-box button")!;
const filterButtons = document.querySelectorAll<HTMLButtonElement>(".filter-buttons button");
const sortSelect = document.querySelector<HTMLSelectElement>(".sort select")!;

let allData: Post[] = [];

async function init() {
  allData = await fetchPosts();
  renderPosts(allData);
}

init();


searchButton.addEventListener("click", () => {
  const filtered = filterPostsByKeyword(allData, searchInput.value);
  renderPosts(filtered);
});


filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const keyword = btn.textContent;
    const filtered = filterPostsByButton(allData, keyword);
    renderPosts(filtered);
  });
});


sortSelect.addEventListener("change", () => {
  const sorted = sortPosts(allData, sortSelect.value as "newest" | "oldest");
  renderPosts(sorted);
});
