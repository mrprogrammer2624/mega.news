"use client";
import { Button, Container, PostCard, Title } from "@/components";
import { Icons, NewPostData } from "@/utility";

export const NewPost = () => {
  return (
    <section className="section-mb">
      <Container>
        <div className="flex justify-between gap-3 mb-7 items-center">
          <Title>new posts</Title>
          <Button variant="third">Show all{Icons.arrowIcon}</Button>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-6">
          {NewPostData.map((content) => (
            <PostCard
              key={content.key}
              postCardLink={"/"}
              subContent
              src={content.src}
              alt={content.alt}
              AvatarSrc={content.avatarSrc}
              avatarAlt={content.avatarAlt}
              title={content.title}
              paragraph={content.paragraph}
              subContentTitle={content.subContentTitle}
              subContentSubTitle={content.subContentSubTitle}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
// padding-bottom: 70%;
