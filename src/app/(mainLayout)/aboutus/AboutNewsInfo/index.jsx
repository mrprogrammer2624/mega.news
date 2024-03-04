import { Container, Title } from "@/components";
import { Icons, MegaNewsInfo } from "@/utility";
import Link from "next/link";

export const AboutNewsInfo = () => {
  return (
    <section className="FooterExtraContainer section-mb">
      <Container>
        <div className="grid grid-cols-5 gap-11">
          <div className="col-span-3 p-8 pl-0 bg-gray rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6835053380046!2d72.83722177597288!3d21.20472818171011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fb2a64a922f%3A0xf5c5fbd871f68587!2sSurat%20station!5e0!3m2!1sen!2sin!4v1703218869924!5m2!1sen!2sin"
              width="840"
              height="297"
              style={{ border: 0 }}
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-span-2">
            <Title>Mega news information</Title>
            <div className="py-5 mb-5 border-solid border-l-4 border-gray">
              <ul className="flex flex-col gap-8 px-3 py-4">
                {MegaNewsInfo.map((content, index) => (
                  <li key={index} className="w-max">
                    <Link
                      href={content.link}
                      target="_blank"
                      className="flex items-center gap-2 capitalize h6 font-medium hover:text-primary ease-linear transition-all"
                    >
                      {content.icons}
                      {content.content}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray rounded-xl py-2 px-5 w-max">
              <h6 className="flex gap-2 items-center capitalize font-medium">
                {Icons.ClockIcon}
                Responding 24 hours a day, 7 days a week
              </h6>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
