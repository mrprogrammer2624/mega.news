import { CardSingle, Container } from "@/components";
import { recentPost } from "@/utility";

export const RecentPosts = () => {
  return (
    <section className="recent-post-wrapper section-mb">
      <Container>
        <div className="grid grid-cols-4 grid-rows-1 gap-6">
          {recentPost.map((content, index) => (
            <div key={index}>
              <CardSingle
                RatioImagesParentClass="before:pb-[150%]"
                cardTitle={content.cardTitle}
                src={content.src}
                ImageAlt={content.alt}
                cardContent={content.cardContent}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
