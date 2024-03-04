import { CardSwiper } from "@/components";
import { NewPostData } from "@/utility";

export const LatestVideos = () => {
  return (
    <CardSwiper
      SectionTitle={"latest videos"}
      CardSwiperContent={NewPostData}
      slidesPerView={4}
      spaceBetween={24}
      isVertical
      subContent
    />
  );
};
