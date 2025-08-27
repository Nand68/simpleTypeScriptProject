import { fetchPosts } from "./data_handler/fetch_posts";
import { renderPosts } from "./render_data/render_posts";
import { filterPostsByButton } from "./data_processing/filter_posts";
import { filterPostsByKeyword } from "./data_processing/search_posts";
import { sortPosts } from "./data_processing/sort_posts";
import { Post } from "./data_handler/data_type";

const searchInput =
  document.querySelector<HTMLInputElement>(".search-box input")!;
const searchButton =
  document.querySelector<HTMLButtonElement>(".search-box button")!;
const filterButtons = document.querySelectorAll<HTMLButtonElement>(
  ".filter-buttons button"
);
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
