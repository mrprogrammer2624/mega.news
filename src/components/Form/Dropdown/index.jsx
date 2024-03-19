"use client";
import { Fragment, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "next/link";

export const Dropdown = ({
  children,
  menuLinks,
  dropdownMenuClassName,
  dropdownMenuBtnClassName,
  dropdownMenuRef,
}) => {
  const dropdownMenuBtnArrow = useRef();
  const menuButtonHandleClick = () => {
    dropdownMenuBtnArrow.current.classList.toggle("rotate-180");
  };
  return (
    <Menu
      as="div"
      className={clsx(dropdownMenuClassName, "relative inline-block text-left")}
      ref={dropdownMenuRef}
    >
      <Menu.Button
        className={clsx(
          dropdownMenuBtnClassName,
          "w-full flex relative justify-center items-center gap-x-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
        )}
        onClick={menuButtonHandleClick}
      >
        {children}
        <ChevronDownIcon
          ref={dropdownMenuBtnArrow}
          className="-mr-1 h-5 w-5 text-gray-400 ease-out duration-200"
          aria-hidden="true"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 top-full z-10 mt-2 w-max-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {menuLinks?.map((content, index) => (
              <Menu.Item
                key={"content" + index}
                id={content.data + "headerMenu"}
              >
                {({ active }) => (
                  <Link
                    href={content.link}
                    className={clsx(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "px-4 py-2 text-sm flex items-center justify-start gap-[10px] hover:text-primary hover:bg-gray"
                    )}
                    onClick={content.handleClickMenu}
                  >
                    {content.icons && content.icons}
                    {content.data}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
