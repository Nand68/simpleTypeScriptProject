import { Post } from "../dataHandling/types";

const container = document.getElementById("data-grid") as HTMLDivElement;

export function renderPosts(data: Post[]): void {
  if (!container) return;
  container.innerHTML = "";
  data.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>Post #${post.id}</h3>
      <h4>${post.title}</h4>
      <p>${post.body}</p>
    `;
    container.appendChild(card);
  });
}
