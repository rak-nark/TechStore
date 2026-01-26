import React from "react";
import {
  StatsColumn,
  StatCard,
  StatIcon,
  StatValue,
  StatLabel,
} from "./Styled.StatsColumnSection";

const StatsColumnSection = ({ stats }) => {
  return (
    <StatsColumn>
      {stats.map((stat, idx) => (
        <StatCard key={idx}>
          <StatIcon $color={stat.color}>
            <stat.icon size={32} />
          </StatIcon>
          <div>
            <StatValue>{stat.value}</StatValue>
            <StatLabel>{stat.label}</StatLabel>
          </div>
        </StatCard>
      ))}
    </StatsColumn>
  );
};

export default StatsColumnSection;
