"use client";

import { Button } from "@/components/Button";
import { authenticationButton } from "@/utility";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Authentication = () => {
  const router = useRouter();
  return (
    <section
      className={clsx(
        "h-dvh authentication-bg bg-no-repeat bg-cover flex items-center justify-center"
      )}
    >
      <div className="container">
        <div className="max-w-[40%] mx-auto bg-white p-[3.5rem] flex flex-col gap-[2.6rem] rounded-3xl">
          <div className="flex flex-col gap-[8px] text-center">
            <Link href="/" className={"text-secondary h1 font-semibold"}>
              MEGA.news
            </Link>
            <h2 className="font-medium leading-tight">Read And Upload Blog</h2>
            <h4 className="leading-none">Sign up to see more</h4>
          </div>
          <div className="flex flex-col gap-4">
            {authenticationButton?.map((content, index) => (
              <Button
                key={index + "authenticationButton" + content.id}
                className={clsx("gap-[10px]")}
                variant={content.variant}
                handleChange={() => router.push(content.link)}
              >
                <span className="block">{content.icons}</span>
                {content.content}
              </Button>
            ))}
          </div>
          <div>3</div>
        </div>
      </div>
    </section>
  );
};

export default Authentication;
