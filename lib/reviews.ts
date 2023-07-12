import { readFile, readdir } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

async function getReview(id: string) {
  const text = await readFile(`./content/reviews/${id}.md`, "utf-8");
  const {
    data: { title, date, image },
    content,
  } = matter(text);
  const body = marked(content, { mangle: false, headerIds: false });
  return { id, title, date, image, body };
}

async function getReviews() {
  const files = await readdir("./content/reviews");
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map(
      (file) => file.slice(0, -3) // remove .md
    );
  const reviews = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }
  return reviews;
}

export { getReview, getReviews };
