import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => (theme.mode === "dark" ? "#101622" : "#f6f6f8")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#1f2937")};
`;

export const MainContent = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;

  @media (min-width: 1024px) {
    padding: 2.5rem;
  }
`;

export const PageHeading = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const HeadingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h2 {
    color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#1f2937")};
  }

  p {
    color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#6b7280")};
  }
`;

export const RegisterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  border: none;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(43, 108, 238, 0.2);

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const LoyaltyCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  background: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(30, 41, 59, 0.5)" : "#f1f5f9"};
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
  padding: 1.5rem;
  height: 100%;
`;

export const LoyaltyContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const LoyaltyText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LoyaltyPoints = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#1f2937")};
`;

export const ProgressSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProgressBar = styled.div`
  width: 100%;
  background: ${({ theme }) => (theme.mode === "dark" ? "#334155" : "#cbd5e1")};
  height: 0.5rem;
  border-radius: 9999px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 100%;
  border-radius: 9999px;
  transition: width 0.3s ease;
`;

export const ProgressText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#64748b")};
  margin: 0;
`;

export const ViewRewardsButton = styled.button`
  background: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#1f2937")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#1f2937" : "#ffffff")};
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const LoyaltyImage = styled.div`
  width: 100%;
  max-width: 12rem;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, #2b6cee 0%, #60a5fa 100%);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  color: #ffffff;
`;

export const DecorativeBackground = styled.div`
  position: absolute;
  right: -2.5rem;
  bottom: -2.5rem;
  width: 10rem;
  height: 10rem;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? "rgba(43, 108, 238, 0.1)"
      : "rgba(43, 108, 238, 0.05)"};
  border-radius: 50%;
  filter: blur(3rem);
  pointer-events: none;
`;

export const StatsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StatCard = styled.div`
  background: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(30, 41, 59, 0.5)" : "#f1f5f9"};
  padding: 1.25rem;
  border-radius: 1.5rem;
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StatIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background: ${({ $color }) => `${$color}10`};
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const StatValue = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#1f2937")};
  margin: 0;
`;

export const StatLabel = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#6b7280")};
  font-weight: 500;
  margin: 0;
  margin-top: 0.25rem;
`;

export const RecentOrdersSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#1f2937")};
  margin: 0;
  letter-spacing: -0.01em;
`;

export const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    text-decoration: underline;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 1.5rem;
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(15, 23, 42, 0.5)" : "#ffffff"};
  font-size: 0.875rem;
`;

export const TableHead = styled.thead`
  background: ${({ theme }) =>
    theme.mode === "dark" ? "rgba(30, 41, 59, 0.5)" : "#f8fafc"};
  color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#6b7280")};
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.75rem;
`;

export const TableBody = styled.tbody`
  divide: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#e2e8f0")};
`;

export const TableRow = styled.tr`
  border-top: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#f3f4f6")};

  &:hover {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "rgba(30, 41, 59, 0.3)" : "#f9fafb"};
  }
`;

export const TableHeader = styled.th`
  padding: 1rem 1.5rem;
  text-align: left;
  font-weight: 600;
`;

export const TableCell = styled.td`
  padding: 1.25rem 1.5rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#e2e8f0" : "#4b5563")};
`;

export const OrderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ImageWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: ${({ theme }) => (theme.mode === "dark" ? "#1e293b" : "#f3f4f6")};
  border-radius: 0.25rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  background: ${({ $color }) => `${$color}15`};
  color: ${({ $color }) => $color};
`;

export const TrackButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SupportCard = styled.div`
  background: ${({ theme, $primary }) =>
    $primary
      ? theme.mode === "dark"
        ? "rgba(43, 108, 238, 0.1)"
        : "rgba(43, 108, 238, 0.05)"
      : theme.mode === "dark"
        ? "rgba(30, 41, 59, 0.5)"
        : "#f1f5f9"};
  border: 1px solid
    ${({ theme, $primary }) =>
      $primary
        ? `${theme.colors.primary}33`
        : theme.mode === "dark"
          ? "#1e293b"
          : "#e2e8f0"};
  padding: 1.5rem;
  border-radius: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

export const SupportIcon = styled.span`
  font-size: 1.875rem;
  color: ${({ $primary, theme }) =>
    $primary
      ? theme.colors.primary
      : theme.mode === "dark"
        ? "#94a3b8"
        : "#94a3b8"};
  flex-shrink: 0;
`;

export const SupportContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SupportTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#1f2937")};
  margin: 0;
`;

export const SupportDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#6b7280")};
  margin: 0;
  line-height: 1.5;
`;

export const SupportLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.875rem;
  font-weight: 700;
  text-decoration: none;
  margin-top: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    text-decoration: underline;
  }
`;
