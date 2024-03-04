"use client";
import { Breadcrumb } from "@/components";
import { AboutContent } from "./AboutContect";
import { AboutNewsInfo } from "./AboutNewsInfo";
import { AboutTeam } from "./AboutTeam";

const AboutUs = () => {
  return (
    <>
      <Breadcrumb />
      <AboutContent />
      <AboutNewsInfo />
      <AboutTeam />
    </>
  );
};

export default AboutUs;
