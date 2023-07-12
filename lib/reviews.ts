import { readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

async function getReview(id: string) {
  const text = await readFile(`./content/reviews/${id}.md`, "utf-8");
  const {
    data: { title, date, image },
    content,
  } = matter(text);
  const body = marked(content, { mangle: false, headerIds: false });
  return { title, date, image, body };
}

export { getReview };
