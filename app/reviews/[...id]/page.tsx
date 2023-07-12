import { readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

import Heading from "@/components/heading";

const PlaceReview = async ({ params }: { params: { id: string } }) => {
  const text = await readFile(`./content/reviews/${params.id[0]}.md`, "utf-8");
  const { data, content } = matter(text);
  const html = marked(content, { mangle: false, headerIds: false });

  return (
    <div>
      <Heading>{data?.title}</Heading>
      <p className="italic pb-2">{data?.date}</p>
      <img
        src={data?.image}
        width={"640"}
        height={"360"}
        className="mb-2 rounded"
      />
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
        className="prose"
      ></div>
    </div>
  );
};

export default PlaceReview;
