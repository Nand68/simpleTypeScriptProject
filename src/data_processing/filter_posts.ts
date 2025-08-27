import { Post } from "../data_handler/data_type";

export function filterPostsByButton(data: Post[], keyword: string): Post[] {
  const lowerKeyword = keyword.toLowerCase();
  return data.filter((post) => post.body.toLowerCase().includes(lowerKeyword));
}
