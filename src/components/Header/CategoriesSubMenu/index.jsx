import clsx from "clsx";
import {
  categories1,
  categories2,
  categories3,
  categories4,
  categories5,
  categories6,
} from "../../../assets/img";
import Image from "next/image";

export const CategoriesSubMenu = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "absolute invisible ease-linear transition-all opacity-0 rounded-xl p-5 shadow-[0px_0px_32px_0px_rgba(0,_0,_0,_0.07)] bg-white z-10 w-100 left-0 translate-x-[-14%] top-full translate-y-2 min-w-[1512px]"
      )}
    >
      <div className="grid grid-cols-4 gap-20">
        <div>
          <div className="w-[190px] h-[190px] ratio">
            <Image
              src={categories1}
              className="object-contain rounded-xl object-center "
              alt="categories"
            />
          </div>
          <div></div>
        </div>
        <div>
          <div className="w-[190px] h-[190px] ratio">
            <Image
              src={categories3}
              className="object-contain rounded-xl object-center "
              alt="categories"
            />
          </div>
          <div></div>
        </div>
        <div>
          <div className="w-[190px] h-[190px] ratio">
            <Image
              src={categories5}
              className="object-contain rounded-xl object-center "
              alt="categories"
            />
          </div>
          <div></div>
        </div>
        <div className="grid-categories-four">
          <div className="">
            <Image
              src={
                "https://images.unsplash.com/photo-1702651598372-f8e777dabe6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
              }
              className="object-contain object rounded-xl-center "
              alt="categories"
            />
          </div>
          <div></div>
        </div>
        <div>
          <div className="w-[190px] h-[190px] ratio">
            <Image
              src={categories2}
              className="object-contain rounded-xl object-center "
              alt="categories"
            />
          </div>
          <div></div>
        </div>
        <div>
          <div className="w-[190px] h-[190px] ratio">
            <Image
              src={categories4}
              className="object-contain rounded-xl object-center "
              alt="categories"
            />
          </div>
          <div></div>
        </div>
        <div>
          <div className="w-[190px] h-[190px] ratio">
            <Image
              src={categories6}
              className="object-contain rounded-xl object-center "
              alt="categories"
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
