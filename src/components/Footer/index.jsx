// "use server";
import Link from "next/link";
import { Container, Title } from "@/components";
import { FooterCategories, footerCommit, footerInstagram } from "@/utility";
import { RatioImages } from "@/components/RatioImages";

const Footer = () => {
  return (
    <footer className="my-10 FooterExtraContainer">
      <Container>
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-2 bg-gray p-10 rounded-r-[50px]">
            <div className="grid grid-cols-2 gap-y-8 gap-x-28">
              <div>
                <Title>mega news</Title>
                <p className="text-justify text-black-75 leading-5 capitalize h5 xl tracking-[0.25px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do elusion tempo incipient ut labore et dolore magna aliqua.
                  Egestas purus viverra accumsan in Nils nisi. Arcu cursus vitae
                  congue mauris Rhodanus Aegean vel elit scelerisque. In egestas
                  erat imperdiet sed euismod nisi porta lorem mollis. Morbi
                  tristique senectus et netus. Mattis pellentesque id nibh
                  tortor id aliquet lectus proin
                </p>
              </div>
              <div>
                <Title>Categories</Title>
                <ul className="grid gap-4">
                  {FooterCategories.map((content, index) => (
                    <li key={index}>
                      <Link
                        href={`categories/${content.children}`}
                        className="capitalize"
                      >
                        {content.children}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Title>Newsletters</Title>
              </div>
              <div>
                <Title>social network</Title>
              </div>
            </div>
            <div className="bg-black-5 grid grid-cols-2 gap-2 p-3 rounded-xl">
              <p className="small capitalize text-black-75">
                privacy policy | terms & conditions
              </p>
              <p className="small capitalize text-black-75 justify-self-end">
                all copyright (c) 2022 reserved
              </p>
            </div>
          </div>
          <div className="py-10">
            <Title>new Comments</Title>
            <div className="grid gap-y-2">
              {footerCommit.map((content, index) => (
                <div className="bg-gray capitalize p-4 rounded-xl" key={index}>
                  <h5 className="font-medium mb-2">{content.title}</h5>
                  <p className="small font-normal">{content.children}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="py-10">
            <Title>Follow on Instagram</Title>
            <div className="grid grid-cols-3 gap-6">
              {footerInstagram.map((content, index) => (
                <RatioImages
                  key={index}
                  src={content.images}
                  RatioImagesClass="rounded-xl object-cover"
                  RatioImagesParentClass="before:pb-[100%]"
                  alt={content.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
