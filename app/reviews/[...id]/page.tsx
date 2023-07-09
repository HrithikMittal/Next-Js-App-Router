import Heading from "@/components/heading";
import { games } from "@/constants/data";

const PlaceReview = ({ params }: { params: { id: string } }) => {
  const game = games.find((game) => game.link === params.id[0]);

  return (
    <div>
      <Heading>{game?.name}</Heading>
      <img
        src={game?.image}
        width={"640"}
        height={"360"}
        className="mb-2 rounded"
      />
    </div>
  );
};

export default PlaceReview;
