export function filterPostsByKeyword(data, keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return data.filter((post) => post.title.toLowerCase().includes(lowerKeyword) ||
        post.body.toLowerCase().includes(lowerKeyword));
}
export function filterPostsByButton(data, keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return data.filter((post) => post.body.toLowerCase().includes(lowerKeyword));
}
