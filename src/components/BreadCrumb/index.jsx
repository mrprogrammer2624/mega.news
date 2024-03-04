"use client";
import Link from "next/link";
import { Icons } from "@/utility/Icons";
import { Container } from "@/components";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const Breadcrumb = () => {
  let pathname = usePathname();
  useEffect(() => {
    let str = pathname;
    let result = str.slice(1);
    document.getElementById("innerPath").innerHTML = result;
  }, [pathname]);

  return (
    <section>
      <Container>
        <nav aria-label="Breadcrumb" className="mb-11">
          <ol className="flex items-center gap-1 text-sm text-gray-600">
            <li>
              <Link
                href="/"
                className="block transition hover:text-gray-700 p small"
              >
                Home
              </Link>
            </li>
            <li className="rotate-360">{Icons.arrowIcon}</li>
            <li>
              <h3
                id="innerPath"
                className="block p small capitalize transition
             hover:text-gray-700 pointer-events-none text-gray-75"
              ></h3>
            </li>
          </ol>
        </nav>
      </Container>
    </section>
  );
};
