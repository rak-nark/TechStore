import React from "react";
import {
  GridSection,
  LoyaltyCard,
  LoyaltyContent,
  LoyaltyText,
  LoyaltyPoints,
  ProgressSection,
  ProgressBar,
  ProgressFill,
  ProgressText,
  ViewRewardsButton,
  LoyaltyImage,
  DecorativeBackground,
} from "./Styled.LoyaltySection";
import { MdDiamond } from "react-icons/md";

const LoyaltySection = ({ loyaltyData }) => {
  const progressPercentage =
    (loyaltyData.points / loyaltyData.targetPoints) * 100;

  return (
    <GridSection>
      <LoyaltyCard>
        <LoyaltyContent>
          <LoyaltyText>
            <div style={{ marginBottom: "1rem" }}>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  margin: 0,
                  textTransform: "uppercase",
                }}
              >
                Loyalty Program
              </p>
              <LoyaltyPoints>
                {loyaltyData.points.toLocaleString()} TechPoints
              </LoyaltyPoints>
            </div>
            <ProgressSection>
              <ProgressBar>
                <ProgressFill style={{ width: `${progressPercentage}%` }} />
              </ProgressBar>
              <ProgressText>
                You're{" "}
                <span style={{ fontWeight: 600 }}>
                  {loyaltyData.pointsAway} points away
                </span>{" "}
                from {loyaltyData.status} status
              </ProgressText>
            </ProgressSection>
            <ViewRewardsButton>View Available Rewards</ViewRewardsButton>
          </LoyaltyText>
          <LoyaltyImage>
            <MdDiamond size={96} style={{ opacity: 0.8 }} />
          </LoyaltyImage>
        </LoyaltyContent>
        <DecorativeBackground />
      </LoyaltyCard>
    </GridSection>
  );
};

export default LoyaltySection;
