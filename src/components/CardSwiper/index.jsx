"use client";
import { SwiperSlide } from "swiper/react";
import { Button, Container, PostCard, SwiperSlider, Title } from "@/components";
import { Icons } from "@/utility";
import clsx from "clsx";

export const CardSwiper = ({
  slidesPerView,
  spaceBetween,
  navigation,
  CardSwiperContent,
  subContent,
  isVertical,
  SectionTitle,
  SwiperLeftButton,
  SwiperRightButton,
  mainParentClassName,
}) => {
  return (
    <section className={mainParentClassName}>
      <Container>
        <div className="flex items-center justify-between gap-5">
          <div>{SectionTitle && <Title>{SectionTitle}</Title>}</div>
          <div className="flex gap-5">
            <Button
              className={clsx(SwiperLeftButton, "rotate-180")}
              variant="third"
            >
              {Icons.arrowIcon}
            </Button>
            <Button
              className={clsx(SwiperRightButton, "rotate-0")}
              variant="third"
            >
              {Icons.arrowIcon}
            </Button>
          </div>
        </div>
        <SwiperSlider
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          navigation={navigation}
        >
          {CardSwiperContent &&
            CardSwiperContent.map((content, index) => (
              <SwiperSlide key={index}>
                <PostCard
                  isVertical={isVertical}
                  alt={content.alt}
                  subContent={subContent}
                  title={content.title}
                  paragraph={content.paragraph}
                  ParentClass={content.ParentClass}
                  src={content.src}
                  rating={content.rating}
                  AvatarSrc={content.avatarSrc}
                  avatarAlt={content.avatarAlt}
                  subContentTitle={content.subContentTitle}
                  subContentSubTitle={content.subContentSubTitle}
                  postCardLink={"/"}
                />
              </SwiperSlide>
            ))}
        </SwiperSlider>
      </Container>
    </section>
  );
};
