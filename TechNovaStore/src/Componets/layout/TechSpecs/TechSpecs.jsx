import React from "react";
import { MdSettingsSuggest } from "react-icons/md";
import {
  SpecsSection,
  SectionTitle,
  TitleIcon,
  SpecsGrid,
  SpecRow,
  SpecLabel,
  SpecValue,
} from "./Styled.TechSpecs";

const TechSpecs = ({ specs = [] }) => {
  const defaultSpecs = [
    { label: "Processor", value: "SuperNova A17 Bionic Chip" },
    { label: "Memory", value: "12GB LPDDR5X RAM" },
    { label: "Display", value: '6.7" OLED 144Hz ProMotion' },
    { label: "Battery", value: "5200mAh - 120W Charging" },
    { label: "Camera", value: "Triple 50MP Pro-Optic Array" },
    { label: "Water Resistance", value: "IP68 (up to 6m for 30 min)" },
  ];

  const specifications = specs.length > 0 ? specs : defaultSpecs;

  return (
    <SpecsSection>
      <SectionTitle>
        <TitleIcon>
          <MdSettingsSuggest />
        </TitleIcon>
        Technical Specifications
      </SectionTitle>

      <SpecsGrid>
        {specifications.map((spec, index) => (
          <SpecRow key={index}>
            <SpecLabel>{spec.label}</SpecLabel>
            <SpecValue>{spec.value}</SpecValue>
          </SpecRow>
        ))}
      </SpecsGrid>
    </SpecsSection>
  );
};

export default TechSpecs;
