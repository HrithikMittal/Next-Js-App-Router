import Heading from "@/components/heading";
import ShareLink from "@/components/share-link";
import { getReview } from "@/lib/reviews";
import { getReviewSlugs } from "@/lib/reviews";

export async function generateStaticParams() {
  const slugs = await getReviewSlugs();
  return slugs.map((slug) => ({ id: slug }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { title } = await getReview(params.id);
  return {
    title: title,
  };
}

const PlaceReview = async ({ params }: { params: { id: string } }) => {
  const { title, date, image, body } = await getReview(params.id);

  return (
    <div>
      <Heading>{title}</Heading>

      <p className="italic pb-2">
        {date} <ShareLink />
      </p>
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
