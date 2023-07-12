import Heading from "@/components/heading";
import { getReview } from "@/lib/reviews";

const PlaceReview = async ({ params }: { params: { id: string } }) => {
  const { title, date, image, body } = await getReview(params.id);

  return (
    <div>
      <Heading>{title}</Heading>
      <p className="italic pb-2">{date}</p>
      <img src={image} width={"640"} height={"360"} className="mb-2 rounded" />
      <div
        dangerouslySetInnerHTML={{
          __html: body,
        }}
        className="prose"
      ></div>
    </div>
  );
};

export default PlaceReview;
