var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchPosts } from "./data_handler/fetch_posts.js";
import { renderPosts } from "./render_data/render_posts.js";
import { filterPostsByButton } from "./data_processing/filter_posts.js";
import { filterPostsByKeyword } from "./data_processing/search_posts.js";
import { sortPosts } from "./data_processing/sort_posts.js";
const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");
const filterButtons = document.querySelectorAll(".filter-buttons button");
const sortSelect = document.querySelector(".sort select");
let allData = [];
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        allData = yield fetchPosts();
        renderPosts(allData);
    });
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
    const sorted = sortPosts(allData, sortSelect.value);
    renderPosts(sorted);
});
