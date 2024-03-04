import clsx from "clsx";
import { Icons } from "@/utility/Icons";
import { RatioImages } from "@/components/RatioImages";

export const CardSingle = ({
  isVideo,
  src,
  ImageAlt,
  cardTitle,
  cardContent,
  RatioImagesParentClass,
  priority,
}) => {
  return (
    <div className="relative">
      <RatioImages
        RatioImagesParentClass={clsx(
          RatioImagesParentClass,
          "rounded-xl overflow-hidden"
        )}
        src={src}
        alt={ImageAlt}
        priority={priority}
      />
      {cardTitle && (
        <div className="bg-white-75 absolute bottom-3 left-2/4 -translate-x-2/4 w-[calc(100%_-_20px)] rounded-xl backdrop-blur p-4 capitalize">
          <h3 className="text-dark line-clamp-1">{cardTitle}</h3>
          <p className="text-dark-75 leading-5 tracking-[0.25] line-clamp-2">
            {cardContent}
          </p>
        </div>
      )}
      {isVideo && (
        <div className="text-primary cursor-pointer w-max p-9 rounded-full bg-white-75 absolute bottom-2/4 right-2/4 translate-y-2/4 translate-x-2/4">
          {Icons.PlayIcon}
        </div>
      )}
    </div>
  );
};
