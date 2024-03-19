"use client";
import Link from "next/link";
import { Container } from "@/components/Container";
import { HeaderLink, Icons } from "@/utility";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { Dropdown, Input } from "../Form";
import Image from "next/image";
import { avatar1 } from "@/assets/img";
import axios from "axios";
import { useEffect } from "react";

const Header = () => {
  let pathname = usePathname();

  let router = useRouter();

  const headerMenuLinks = [
    {
      key: 1,
      data: "Profile",
      link: "/profile",
      icons: Icons.userIcon,
    },
    {
      key: 2,
      data: "Logout",
      link: "/",
      icons: Icons.ExitIcons,
      handleClickMenu: async () => {
        try {
          await axios.get("/api/users/logout");
          router.push("/authentication");
        } catch (error) {
          console.log(error.message);
        }
      },
    },
  ];

  // const hello = async () => {
  //   await axios.get("/api/users/profile");
  //   console.log("Hello");
  // };

  // useEffect(() => {
  //   hello();
  // }, []);

  return (
    <header className="py-11">
      <Container>
        <div className="grid grid-cols-2 gap-3 items-center">
          <div className="flex gap-16 items-center justify-start">
            <Link href="/" className={"text-secondary h3 font-semibold"}>
              MEGA.news
            </Link>
            <ul className="flex gap-8">
              {HeaderLink.map((content, index) => {
                let removedSpacesText = content.link
                  .split(" ")
                  .join("")
                  .toLocaleLowerCase();
                return (
                  <li className="relative group" key={index}>
                    <Link
                      href={content.link}
                      className={clsx(
                        removedSpacesText === pathname.toLocaleLowerCase()
                          ? "before:w-3"
                          : "before:w-0",
                        "relative capitalize flex items-center group-hover:text-primary before:ease-in-out before:transition-[width] before:absolute before:top-full hover:before:w-3 before:h-[4px] before:bg-primary before:rounded-xl"
                      )}
                    >
                      {content.title}
                      {content.children && (
                        <span className="rotate-90">{Icons.arrowIcon}</span>
                      )}
                    </Link>
                    {content.children}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="justify-end w-full gap-3 flex items-center flex-wrap">
            <div className="max-w-[30rem] w-full">
              <Input
                parentClassName="w-full"
                type="search"
                placeholder="Search anything"
              />
            </div>
            <Dropdown
              dropdownMenuClassName="flex items-center justify-start headerDropdownMenu"
              menuLinks={headerMenuLinks}
            >
              <div className="max-w-[50px] rounded-[12px] overflow-hidden">
                <Image src={avatar1} width="100%" height="100%" alt="avatar1" />
              </div>
              <div>Behzad</div>
            </Dropdown>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
