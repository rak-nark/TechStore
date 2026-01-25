import React from "react";
import {
  SupportGrid,
  SupportCard,
  SupportIcon,
  SupportContent,
  SupportTitle,
  SupportDescription,
  SupportLink,
} from "./Styled.SupportGridSection";
import { MdBuildCircle, MdShieldMoon } from "react-icons/md";

const SupportGridSection = () => {
  return (
    <SupportGrid>
      <SupportCard $primary={true}>
        <SupportIcon $primary={true}>
          <MdBuildCircle size={32} />
        </SupportIcon>
        <SupportContent>
          <SupportTitle>Need a Repair?</SupportTitle>
          <SupportDescription>
            Book a diagnostic appointment at your nearest TechStore Genius Bar.
          </SupportDescription>
          <SupportLink href="#">Schedule Now →</SupportLink>
        </SupportContent>
      </SupportCard>
      <SupportCard $primary={false}>
        <SupportIcon $primary={false}>
          <MdShieldMoon size={32} />
        </SupportIcon>
        <SupportContent>
          <SupportTitle>TechCare+ Coverage</SupportTitle>
          <SupportDescription>
            Extend your warranty on recent purchases within 30 days of delivery.
          </SupportDescription>
          <SupportLink href="#">Check Eligibility →</SupportLink>
        </SupportContent>
      </SupportCard>
    </SupportGrid>
  );
};

export default SupportGridSection;
