import React from "react";
import {
  PromoSection,
  BannerWrapper,
  BackgroundImage,
  Overlay,
  Content,
  Eyebrow,
  Heading,
  Description,
  CTAButton,
} from "./Styled.PromotionalBanner";

const defaultData = {
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuByoy8X5SQ0I-koyvpKFwJfAX1sBHzHsw5L5A0NdyeLBC8kcSmAwc2vwptZoFVQChGZPHt1fOpF4tKbdYfKNW-aiKLUOA4M-P5edR_FF6tiUkNZPAf1K2ogiP7rXmuCwwNjttFwz0D1Pxb65nqThGBNFQxN7IwD6U7nsu95ABV1lHHvDQL36R-nRlWzmS19CPHrv7EtzkNKZNVP6xs0p4bMI_63nox8pl9byOR5tc93pWa7aKpkFgj3uPdUu9bBDwJtdA1D8YjUNZLX",
  eyebrow: "Summer Tech Sale",
  title: "Get 20% Off All Accessories",
  description:
    "Upgrade your workspace with premium peripherals. Limited time offer valid until end of month.",
  ctaText: "Use Code: SUMMER20",
};

export const PromotionalBanner = ({
  image = defaultData.image,
  eyebrow = defaultData.eyebrow,
  title = defaultData.title,
  description = defaultData.description,
  ctaText = defaultData.ctaText,
  onCtaClick = () => {},
}) => {
  return (
    <PromoSection>
      <BannerWrapper>
        <BackgroundImage src={image} alt={title} />
        <Overlay />

        <Content>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading>{title}</Heading>
          <Description>{description}</Description>
          <CTAButton onClick={onCtaClick}>{ctaText}</CTAButton>
        </Content>
      </BannerWrapper>
    </PromoSection>
  );
};

export default PromotionalBanner;
