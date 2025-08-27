import { Post } from "../dataHandling/types";

export function sortPosts(data: Post[], type: "newest" | "oldest"): Post[] {
  const sorted = [...data];
  if (type === "newest") {
    sorted.sort((a, b) => b.id - a.id);
  } else {
    sorted.sort((a, b) => a.id - b.id);
  }
  return sorted;
}
