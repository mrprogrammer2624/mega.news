import { backgroundColor } from "@/assets/img";
import { Container } from "@/components";
import { CardSingle } from "@/components/CardSingle";

export const AboutContent = () => {
  return (
    <section className="section-mb">
      <Container>
        <div className="bg-gray p-8 rounded-xl">
          <div>
            <h1></h1>
          </div>
          <div className="grid grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-justify leading-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                congue mauris rhoncus aenean vel elit scelerisque. In egestas
                erat imperdiet sed euismod nisi porta lorem mollis. Morbi
                tristique senectus et netus. Mattis pellentesque id nibh tortor
                id aliquet lectus proin. Sapien faucibus et molestie ac feugiat
                sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi
                tincidunt ornare massa eget. Dictum varius duis at consectetur
                lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed
                enim. Velit ut tortor pretium viverra suspendisse potenti
                nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet
                facilisis magna. Dignissim diam quis enim lobortis scelerisque
                fermentum. Odio ut enim blandit volutpat maecenas volutpat.
                Ornare lectus sit amet est placerat in egestas erat.
              </p>
            </div>
            <div>
              <CardSingle
                isVideo
                src={backgroundColor}
                ImageAlt={"video"}
                RatioImagesParentClass="before:pb-[65%]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
