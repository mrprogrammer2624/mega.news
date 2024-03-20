"use client";
import { SwiperSlide } from "swiper/react";
import { Container, HasTag, SwiperSlider } from "@/components";
import { mainHasTag } from "@/utility";

export const HasTagPosts = () => {
  return (
    <section className="HasTag-wrapper section-mb">
      <Container>
        <div className="bg-gray rounded-xl p-[10px] relative">
          <div className="overflow-auto no-scroll flex gap-6 flex-nowrap">
            <SwiperSlider slidesPerView={8} spaceBetween={20} navigation={true}>
              {mainHasTag.map((content, index) => (
                <SwiperSlide key={index}>
                  <HasTag
                    Image={content.image}
                    alt={content.alt}
                    toLink={`categories/${content.children}`}
                    className="w-[170px] relative flex flex-grow-0 flex-shrink-0 capitalize"
                  >
                    &#x23;{content.children}
                  </HasTag>
                </SwiperSlide>
              ))}
            </SwiperSlider>
          </div>
        </div>
      </Container>
    </section>
  );
};
