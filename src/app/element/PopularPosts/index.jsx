"use client";
import {
  Button,
  CardSwiper,
  Container,
  PostCard,
  SwiperSlider,
  Title,
} from "@/components";
import { NewPostData } from "@/utility";
import axios from "axios";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";

export const PopularPosts = () => {
  const [first, setFirst] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ef94caa0f0ef4dfd908450643db75cdf"
      )
      .then((res) => {
        setFirst(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* <CardSwiper
        SectionTitle={"popular posts"}
        CardSwiperContent={NewPostData}
        slidesPerView={4}
        spaceBetween={24}
        isVertical
        subContent
        SwiperLeftButton="popular-posts-left"
        SwiperRightButton="popular-posts-right"
        navigation={{
          prevEl: ".popular-posts-left",
          nextEl: ".popular-posts-right",
        }}
      /> */}
      <section>
        <Container>
          <div className="flex items-center justify-between gap-5">
            <div>
              <Title>popular posts</Title>
            </div>
            <div className="flex gap-5">
              {/* <Button
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
              </Button> */}
            </div>
          </div>
          <SwiperSlider
            slidesPerView={4}
            spaceBetween={24}
            // navigation={navigation}
          >
            {first.map((content, index) => (
              <SwiperSlide key={index}>
                <PostCard
                  isVertical={true}
                  postCardLink={content?.url}
                  src={"https://picsum.photos/200/300" || content?.urlToImage}
                  AvatarSrc={
                    "https://picsum.photos/200/300" || content?.urlToImage
                  }
                  avatarAlt={content?.author || "author"}
                  alt={content?.author || "author"}
                  subContentTitle={content?.author}
                  title={content?.title}
                  paragraph={content?.description}
                  subContent
                />
              </SwiperSlide>
            ))}
          </SwiperSlider>
        </Container>
      </section>
    </>
  );
};
