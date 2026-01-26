import React from "react";
import { SpecRow, SpecLabelCell, SpecValueCell } from "./Styled.ComparisonRow";

const ComparisonRow = ({ label, values, showDifferences }) => {
  const allEqual = values.every((v) => v === values[0]);
  const highlight = showDifferences && !allEqual;

  if (showDifferences && allEqual) return null;

  return (
    <SpecRow>
      <SpecLabelCell>{label}</SpecLabelCell>
      {values.map((val, idx) => (
        <SpecValueCell key={idx} $highlight={highlight && !allEqual}>
          {val}
        </SpecValueCell>
      ))}
    </SpecRow>
  );
};

export default ComparisonRow;
