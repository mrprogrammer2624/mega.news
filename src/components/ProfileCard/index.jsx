import { RatioImages } from "../RatioImages";

export const ProfileCard = ({ src, TeamName, position, alt }) => {
  return (
    <div className="bg-white hover:border-primary-50 hover:scale-105 ease-linear w-full transition-all border-solid border border-transparent text-center capitalize font-medium inline-flex flex-col gap-6 p-3 pt-5 rounded-xl shadow-[0px_0px_32px_0px_rgba(0,_0,_0,_0.07)] ">
      <RatioImages
        src={src}
        RatioImagesParentClass="max-w-[124px] mx-auto"
        RatioImagesClass="rounded-xl"
        alt={alt}
      />
      <h6>{position}</h6>
      <div className="bg-gray py-4 rounded-xl">
        <h5 className="">{TeamName}</h5>
      </div>
    </div>
  );
};
