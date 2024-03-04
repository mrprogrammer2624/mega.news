"use client";

import clsx from "clsx";
import { Icons } from "@/utility/Icons";
import Link from "next/link";
import { Button, RatioImages } from "@/components/";

export const PostCard = ({
  ParentClass,
  isVertical,
  title,
  paragraph,
  src,
  rating,
  subContent,
  AvatarSrc,
  subContentTitle,
  subContentSubTitle,
  postCardLink,
  alt,
  avatarAlt,
  widthImg,
  heightImg,
}) => (
  <Link
    href={postCardLink}
    className={clsx(
      "bg-white p-3 gap-4 flex rounded-xl shadow-[0px_0px_32px_0px_rgba(0,_0,_0,_0.07)]",
      ParentClass,
      { ["flex-col"]: isVertical == true }
    )}
  >
    <RatioImages
      src={src}
      alt={alt}
      widthImg={widthImg}
      heightImg={heightImg}
      RatioImagesParentClass="before:pb-[70%] max-w-[340px]"
    />
    <div className="flex flex-col h-full">
      <div className="capitalize">
        <h5
          className={clsx("font-medium text-black line-clamp-1", {
            ["py-0 mb-4"]: isVertical == true,
            ["py-4"]: isVertical != true,
          })}
        >
          {title}
        </h5>
        {paragraph && (
          <p className="h5 xl leading-5 tracking-[0.25px] line-clamp-2 mb-10">
            {paragraph}
          </p>
        )}
      </div>

      {subContent && (
        <>
          {AvatarSrc && (
            <div className="bg-gray flex gap-4 items-center justify-between py-3 px-4 rounded-xl mt-auto">
              <div className="flex items-center gap-3">
                <RatioImages
                  src={AvatarSrc}
                  alt={avatarAlt}
                  RatioImagesParentClass="w-11 h-11"
                />
                <div className="capitalize">
                  <h5 className="xl font-medium leading-normal text-black">
                    {subContentTitle}
                  </h5>
                  <p className="small font-normal leading-normal text-black-75 line-clamp-1">
                    {subContentSubTitle}
                  </p>
                </div>
              </div>
              <Button className="text-black-50 p-0 hover:text-primary-75 transition-all ease-linear block">
                {Icons.SaveIcon}
              </Button>
            </div>
          )}
          {rating && (
            <div className="bg-gray flex gap-4 justify-between py-3 px-4 rounded-xl mt-auto">
              <div className="flex gap-5">
                <Link
                  href="/"
                  className="flex gap-1 text-black-50 hover:text-primary-75 ease-linear transition-all"
                >
                  {Icons.EyeIcon}
                  <span className="block text-black font-medium leading-6 hover:text-primary-75 ease-linear transition-all">
                    15k
                  </span>
                </Link>
                <Link
                  href="/"
                  className="flex gap-1 text-black-50 hover:text-primary-75 ease-linear transition-all"
                >
                  {Icons.StarIcon}
                  <span className="block text-black font-medium leading-6 hover:text-primary-75 ease-linear transition-all">
                    4.5
                  </span>
                </Link>
              </div>
              <div className="flex gap-5">
                <Link
                  href="/"
                  className="block text-black-50 hover:text-primary-75 transition-all ease-linear"
                >
                  {Icons.WriterIcon}
                </Link>
                k
              </div>
            </div>
          )}
        </>
      )}
    </div>
  </Link>
);
