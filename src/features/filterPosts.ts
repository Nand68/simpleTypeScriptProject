import { Post } from "../dataHandling/types";


export function filterPostsByButton(data: Post[], keyword: string): Post[] {
  const lowerKeyword = keyword.toLowerCase();
  return data.filter((post) => post.body.toLowerCase().includes(lowerKeyword));
}
