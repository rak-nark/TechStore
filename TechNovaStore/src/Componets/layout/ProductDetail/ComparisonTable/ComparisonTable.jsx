import React from "react";
import { MdCheck } from "react-icons/md";
import {
  ComparisonSection,
  SectionTitle,
  TableContainer,
  StyledTable,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  HighlightedCell,
  CheckIcon,
} from "./Styled.ComparisonTable";

const ComparisonTable = ({ currentProduct, comparisons = [] }) => {
  const defaultComparisons = [
    {
      feature: "Price",
      current: "$1,099",
      products: ["$949", "$1,199"],
    },
    {
      feature: "Weight",
      current: "188g",
      products: ["202g", "195g"],
    },
    {
      feature: "CPU Score",
      current: "9,840",
      currentHighlight: true,
      products: ["8,120", "9,200"],
    },
    {
      feature: "5G Support",
      current: "check",
      products: ["check", "check"],
    },
  ];

  const comparisonData =
    comparisons.length > 0 ? comparisons : defaultComparisons;
  const productNames = currentProduct?.compareTo || [
    "Astro G12",
    "Zenith 9 Ultra",
  ];

  return (
    <ComparisonSection>
      <SectionTitle>Compare with similar products</SectionTitle>

      <TableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableHeader>Feature</TableHeader>
              <TableHeader $primary>
                {currentProduct?.name || "Nebula Pro X"}
              </TableHeader>
              {productNames.map((name, index) => (
                <TableHeader key={index}>{name}</TableHeader>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {comparisonData.map((row, index) => (
              <TableRow key={index}>
                <TableCell $label>{row.feature}</TableCell>
                <HighlightedCell $highlight={row.currentHighlight}>
                  {row.current === "check" ? (
                    <CheckIcon>
                      <MdCheck />
                    </CheckIcon>
                  ) : (
                    row.current
                  )}
                </HighlightedCell>
                {row.products.map((value, idx) => (
                  <TableCell key={idx}>
                    {value === "check" ? (
                      <CheckIcon>
                        <MdCheck />
                      </CheckIcon>
                    ) : (
                      value
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    </ComparisonSection>
  );
};

export default ComparisonTable;
