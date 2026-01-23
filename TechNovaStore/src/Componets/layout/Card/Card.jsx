import React from "react";
import {
  CardWrapper,
  CardSurface,
  GlowOverlay,
  CardContainer,
  ContentSection,
  TextGroup,
  BadgeText,
  MainTitle,
  DescriptionText,
  ButtonGroup,
  Button,
  ImageSection,
  CardImage,
} from "./Styled.Card";

export const Card = ({
  badge = "New Generation",
  title = "The Future of Computing.",
  description = "Experience the power of the new ProBook X15. Engineered for professionals, designed for the absolute future of performance.",
  primaryButtonText = "Shop Now",
  secondaryButtonText = "Learn More",
  imageSrc = "https://via.placeholder.com/400x400",
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
}) => {
  return (
    <CardWrapper>
      <CardSurface>
        <GlowOverlay />
        <CardContainer>
          <ContentSection>
            <TextGroup>
              <BadgeText>{badge}</BadgeText>
              <MainTitle>{title}</MainTitle>
              <DescriptionText>{description}</DescriptionText>
            </TextGroup>

            <ButtonGroup>
              <Button $variant="primary" onClick={onPrimaryClick}>
                {primaryButtonText}
              </Button>
              <Button $variant="secondary" onClick={onSecondaryClick}>
                {secondaryButtonText}
              </Button>
            </ButtonGroup>
          </ContentSection>

          <ImageSection>
            <CardImage src={imageSrc} alt="Producto" />
          </ImageSection>
        </CardContainer>
      </CardSurface>
    </CardWrapper>
  );
};

export default Card;
