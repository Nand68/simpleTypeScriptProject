import { Post } from "../data_handler/data_type";

export function filterPostsByKeyword(data: Post[], keyword: string): Post[] {
  const lowerKeyword = keyword.toLowerCase();
  return data.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerKeyword) ||
      post.body.toLowerCase().includes(lowerKeyword)
  );
}