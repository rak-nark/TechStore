import React from "react";
import {
  Card,
  TableScroll,
  Table,
  TableHeadCell,
  ToggleRow,
  MutedLabel,
  ToggleControl,
  ToggleLabel,
  Switch,
  ProductCard,
  SectionDivider,
  SectionTitleCell,
} from "../../../Pages/Styled.TechStoreCompare";
import CompareProductColumn from "../../ui/Compare/CompareProductColumn";
import ComparisonRow from "../../ui/Compare/ComparisonRow";

const ComparisonTable = ({
  products,
  sections,
  showDifferences,
  onToggleDifferences,
  onRemoveProduct,
  onAddToCart,
}) => {
  return (
    <Card>
      <TableScroll>
        <Table>
          <thead>
            <tr>
              <TableHeadCell $isFirst>
                <ToggleRow>
                  <MutedLabel>Comparison View</MutedLabel>
                  <ToggleControl>
                    <ToggleLabel>Show Differences</ToggleLabel>
                    <Switch
                      $on={showDifferences}
                      onClick={onToggleDifferences}
                    />
                  </ToggleControl>
                </ToggleRow>
              </TableHeadCell>
              {products.map((product, idx) => (
                <TableHeadCell key={product.id || idx}>
                  <CompareProductColumn
                    product={product}
                    onRemove={() => onRemoveProduct(product.id)}
                    onAddToCart={() => onAddToCart(product.id)}
                  />
                </TableHeadCell>
              ))}
            </tr>
          </thead>
          <tbody>
            {sections.map((section) => (
              <React.Fragment key={section.key}>
                <SectionDivider>
                  <SectionTitleCell colSpan={products.length + 1}>
                    {section.title}
                  </SectionTitleCell>
                </SectionDivider>
                {section.rows.map((row) => (
                  <ComparisonRow
                    key={`${section.key}-${row.label}`}
                    label={row.label}
                    values={row.values}
                    showDifferences={showDifferences}
                  />
                ))}
              </React.Fragment>
            ))}
          </tbody>
          <tfoot></tfoot>
        </Table>
      </TableScroll>
    </Card>
  );
};

export default ComparisonTable;
