import clsx from "clsx";
import { RatioImages } from "../RatioImages";
import Link from "next/link";

export const HasTag = ({ Image, alt, className, children, toLink }) => {
  return (
    <>
      <Link href={toLink} className={clsx(className)}>
        <RatioImages
          src={Image}
          RatioImagesParentClass="before:pb-[30%]"
          RatioImagesClass="blur-[2.5px] rounded-xl"
          alt={alt}
        />
        <h5 className="absolute font-medium capitalize text-center bottom-2/4 right-2/4 text-white translate-y-2/4 translate-x-2/4">
          {children}
        </h5>
      </Link>
    </>
  );
};
