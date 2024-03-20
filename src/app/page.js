import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  HasTagPosts,
  // ClubInfo,
  LatestVideos,
  NewPosts,
  PopularPosts,
  RecentPosts,
  TopPost,
  TrendyPosts,
  Weather,
} from "@/app/element";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <HasTagPosts />
        <RecentPosts />
        <PopularPosts />
        {/* <ClubInfo /> */}
        <NewPosts />
        <LatestVideos />
        {/* <TrendyPosts /> */}
        <Weather />
        <TopPost />
      </main>
      <Footer />
    </>
  );
}
