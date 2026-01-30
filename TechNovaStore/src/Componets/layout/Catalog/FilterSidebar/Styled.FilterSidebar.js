import styled from "styled-components";

export const Sidebar = styled.aside`
  width: 16rem;
  flex-shrink: 0;
  position: sticky;
  top: 6rem;
  height: fit-content;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const SidebarTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.25rem;
  }
`;

export const ResetButton = styled.button`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    text-decoration: underline;
  }
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FilterAccordion = styled.details`
  border-bottom: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
  padding: 0.75rem 0;

  ${({ $open }) =>
    $open &&
    `
    &[open] {
      summary svg {
        transform: rotate(180deg);
      }
    }
  `}
`;

export const FilterAccordionSummary = styled.summary`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  list-style: none;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  user-select: none;

  &::-webkit-details-marker {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 1.25rem;
    transition: transform 0.3s;
  }
`;

export const FilterAccordionContent = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const FilterCheckbox = styled.input`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#475569" : "#cbd5e1")};
  accent-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const FilterText = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 0.2s;
`;

export const PriceRangeSection = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
`;

export const PriceRangeTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const PriceSliderContainer = styled.div`
  padding: 0 0.5rem;
`;

export const PriceSliderTrack = styled.div`
  height: 0.375rem;
  width: 100%;
  background: ${({ theme }) => (theme.mode === "dark" ? "#334155" : "#e2e8f0")};
  border-radius: 9999px;
  position: relative;
`;

export const PriceSliderRange = styled.div`
  position: absolute;
  left: ${({ $start }) => $start}%;
  right: ${({ $end }) => 100 - $end}%;
  top: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 9999px;
`;

export const PriceSliderThumb = styled.input`
  position: absolute;
  left: 0;
  top: -0.375rem;
  width: 100%;
  height: 1rem;
  background: transparent;
  border: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  pointer-events: none;
  z-index: ${({ $zIndex }) => $zIndex || 5};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1rem;
    height: 1rem;
    background: ${({ theme }) => theme.colors.primary};
    border: 2px solid
      ${({ theme }) => (theme.mode === "dark" ? "#0f172a" : "#ffffff")};
    border-radius: 9999px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    pointer-events: all;
  }

  &::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background: ${({ theme }) => theme.colors.primary};
    border: 2px solid
      ${({ theme }) => (theme.mode === "dark" ? "#0f172a" : "#ffffff")};
    border-radius: 9999px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    pointer-events: all;
  }
`;

export const PriceValues = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const PriceValue = styled.div`
  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#f1f5f9")};
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ApplyButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  font-weight: 700;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #1e5dd8;
  }
`;
