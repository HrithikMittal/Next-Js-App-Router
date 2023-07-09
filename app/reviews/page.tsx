import Heading from "@/components/heading";
import { games } from "@/constants/data";
import Link from "next/link";

const Reviews = () => {
  return (
    <>
      <Heading>Reviews</Heading>
      <div className="flex gap-x-10 py-5 ">
        {games.map((game) => (
          <div key={game.link} className="hover:shadow-xl">
            <Link href={`/reviews/${game.link}`}>
              <img
                src={game.image}
                width={"450"}
                height={"360"}
                className="mb-2 rounded"
              />
              <p className="text-center pb-3">{game.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
