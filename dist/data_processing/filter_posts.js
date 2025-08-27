export function filterPostsByButton(data, keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return data.filter((post) => post.body.toLowerCase().includes(lowerKeyword));
}
