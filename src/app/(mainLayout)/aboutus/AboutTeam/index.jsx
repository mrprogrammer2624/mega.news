import { Container, ProfileCard, Title } from "@/components";
import { MegaNewsTeam } from "@/utility";

export const AboutTeam = () => {
  return (
    <section>
      <Container>
        <Title>Mega News team</Title>
        <div className="grid grid-cols-6 gap-6">
          {MegaNewsTeam.map((content, index) => (
            <ProfileCard
              key={index}
              src={content.src}
              alt={content.alt}
              TeamName={content.TeamName}
              position={content.position}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
