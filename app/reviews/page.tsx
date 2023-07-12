import Heading from "@/components/heading";
import Link from "next/link";

import { getReviews } from "@/lib/reviews";

const Reviews = async () => {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews</Heading>
      <div className="flex gap-x-10 py-5 ">
        {reviews.map(({ id, image, title }) => (
          <div key={id} className="hover:shadow-xl">
            <Link href={`/reviews/${id}`}>
              <img
                src={image}
                width={"450"}
                height={"360"}
                className="mb-2 rounded"
              />
              <p className="text-center pb-3">{title}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
