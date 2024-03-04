import clsx from "clsx";
import Image from "next/image";

export const RatioImages = ({
  src,
  alt,
  RatioImagesParentClass,
  RatioImagesClass,
  priority,
  widthImg,
  heightImg,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        RatioImagesParentClass,
        "ratio before:block flex-[0_0_auto] relative"
      )}
    >
      <Image
        src={src}
        alt={alt}
        className={clsx(
          RatioImagesClass,
          "rounded-xl absolute top-0 left-0 w-full h-full object-cover"
        )}
        width={widthImg || 1920}
        height={heightImg || 1920}
        {...rest}
      />
    </div>
  );
};
