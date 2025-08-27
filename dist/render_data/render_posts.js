const container = document.getElementById("data-grid");
export function renderPosts(data) {
    if (!container)
        return;
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
