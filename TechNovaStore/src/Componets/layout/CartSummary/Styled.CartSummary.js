import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 24rem;

  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const SummaryCard = styled.div`
  background: ${({ theme }) => (theme.mode === "dark" ? "#0f172a" : "#ffffff")};
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
  border-radius: 0.75rem;
  padding: 1.5rem;
  position: sticky;
  top: 6rem;

  @media (max-width: 768px) {
    position: static;
    padding: 1rem;
  }
`;

export const SummaryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
  margin: 0 0 1.5rem 0;
`;

export const BreakdownSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const BreakdownRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BreakdownLabel = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#64748b")};
`;

export const BreakdownValue = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme, $highlight }) => {
    if ($highlight === "success") return "#22c55e";
    return theme.mode === "dark" ? "#ffffff" : "#0f172a";
  }};
`;

export const BreakdownDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
  margin: 0.5rem 0;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
`;

export const TotalLabel = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
`;

export const TotalValue = styled.div`
  text-align: right;
`;

export const TotalAmount = styled.div`
  font-size: 1.875rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TotalCurrency = styled.div`
  font-size: 0.625rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#64748b" : "#94a3b8")};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-top: 0.25rem;
`;

export const PromoSection = styled.div`
  margin-bottom: 1.5rem;
`;

export const PromoLabel = styled.label`
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => (theme.mode === "dark" ? "#64748b" : "#94a3b8")};
  margin-bottom: 0.5rem;
`;

export const PromoInputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const PromoInput = styled.input`
  flex: 1;
  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#f1f5f9")};
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};

  &::placeholder {
    color: ${({ theme }) => (theme.mode === "dark" ? "#64748b" : "#cbd5e1")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
`;

export const PromoButton = styled.button`
  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "#334155" : "#cbd5e1"};
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 0.75rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s;
  box-shadow: 0 10px 25px -5px rgba(43, 108, 238, 0.2);

  &:hover {
    background: #2563eb;
    box-shadow: 0 20px 35px -10px rgba(43, 108, 238, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const TrustBadge = styled.div`
  background: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(30, 41, 59, 0.5)" : "#f1f5f9"};
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
`;

export const TrustIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin: 0 auto 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const TrustText = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
  margin-bottom: 1rem;
`;

export const PaymentMethods = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  opacity: 0.6;
`;

export const PaymentMethod = styled.div`
  width: 3rem;
  height: 2rem;
  background: ${({ theme }) => (theme.mode === "dark" ? "#334155" : "#cbd5e1")};
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.625rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#64748b")};
`;

export const TrustDescription = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#64748b" : "#94a3b8")};
  line-height: 1.5;
  margin: 0;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.2s;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;
