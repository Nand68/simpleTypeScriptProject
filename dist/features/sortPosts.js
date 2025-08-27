export function sortPosts(data, type) {
    const sorted = [...data];
    if (type === "newest") {
        sorted.sort((a, b) => b.id - a.id);
    }
    else {
        sorted.sort((a, b) => a.id - b.id);
    }
    return sorted;
}
