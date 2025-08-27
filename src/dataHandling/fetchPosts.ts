import { Post } from "./types";

export async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
