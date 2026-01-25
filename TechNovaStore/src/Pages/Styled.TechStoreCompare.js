import styled from "styled-components";

export const PageWrapper = styled.div`
  background: ${({ theme }) => (theme.mode === "dark" ? "#101622" : "#f6f6f8")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#e2e8f0" : "#0f172a")};
  min-height: 100vh;
`;

export const Content = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 1.5rem 1rem 2.5rem;

  @media (min-width: 1024px) {
    padding: 2rem 2.5rem 3rem;
  }
`;

export const Breadcrumbs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem 0;
`;

export const CrumbLink = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => (theme.mode === "dark" ? "#92a4c9" : "#64748b")};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CrumbCurrent = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
`;

export const Divider = styled.span`
  color: ${({ theme }) => (theme.mode === "dark" ? "#92a4c9" : "#94a3b8")};
`;

export const PageHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-end;
  padding: 1.5rem 0;
`;

export const HeadingBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#92a4c9" : "#475569")};
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const GhostButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#324467" : "#e2e8f0")};
  background: transparent;
  color: ${({ theme }) => (theme.mode === "dark" ? "#e2e8f0" : "#0f172a")};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "#192233" : "#f1f5f9"};
  }
`;

export const PrimaryGhostButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => `${theme.colors.primary}33`};
  background: ${({ theme }) => `${theme.colors.primary}1A`};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => `${theme.colors.primary}33`};
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => (theme.mode === "dark" ? "#111722" : "#ffffff")};
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#324467" : "#e2e8f0")};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px -12px rgba(15, 23, 42, 0.35);
`;

export const TableScroll = styled.div`
  overflow-x: auto;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 980px;
  border-collapse: collapse;
`;

export const TableHeadCell = styled.th`
  padding: 1.25rem;
  text-align: left;
  vertical-align: top;
  background: ${({ theme }) => (theme.mode === "dark" ? "#192233" : "#f8fafc")};
  color: ${({ theme }) => (theme.mode === "dark" ? "#cbd5e1" : "#475569")};
  border-left: ${({ $isFirst, theme }) =>
    $isFirst
      ? "none"
      : `1px solid ${theme.mode === "dark" ? "#324467" : "#e2e8f0"}`};
`;

export const ToggleRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const MutedLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ToggleControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ToggleLabel = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#cbd5e1" : "#475569")};
`;

export const Switch = styled.button`
  width: 42px;
  height: 22px;
  border-radius: 999px;
  border: none;
  background: ${({ theme, $on }) =>
    $on ? theme.colors.primary : theme.mode === "dark" ? "#334155" : "#e2e8f0"};
  position: relative;
  cursor: pointer;
  transition: background 0.2s ease;

  &:after {
    content: "";
    position: absolute;
    top: 3px;
    left: ${({ $on }) => ($on ? "22px" : "3px")};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ffffff;
    transition: left 0.2s ease;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProductMedia = styled.div`
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  background: ${({ theme }) => (theme.mode === "dark" ? "#232f48" : "#f1f5f9")};
  aspect-ratio: 4 / 3;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  border: none;
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  padding: 0.35rem;
  border-radius: 999px;
  cursor: pointer;
`;

export const ProductMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const ProductTitle = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
`;

export const ProductSubtitle = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#92a4c9" : "#475569")};
`;

export const ProductPrice = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
`;

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 0.7rem 1rem;
  border-radius: 0.75rem;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  font-weight: 800;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 18px -10px ${({ theme }) => theme.colors.primary};
  }
`;

export const SectionDivider = styled.tr`
  background: ${({ theme }) => (theme.mode === "dark" ? "#192233" : "#f8fafc")};
`;

export const SectionTitleCell = styled.td`
  padding: 0.85rem 1.25rem;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => (theme.mode === "dark" ? "#94a3b8" : "#94a3b8")};
  border-top: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#324467" : "#e2e8f0")};
`;

export const SpecRow = styled.tr`
  border-top: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#324467" : "#e2e8f0")};
  background: ${({ theme }) => (theme.mode === "dark" ? "#0f172a" : "#ffffff")};

  &:hover {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "#192233" : "#f8fafc"};
  }
`;

export const SpecLabelCell = styled.td`
  padding: 1rem 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
  font-size: 0.95rem;
`;

export const SpecValueCell = styled.td`
  padding: 1rem 1.25rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#cbd5e1" : "#475569")};
  font-size: 0.95rem;
  border-left: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#324467" : "#e2e8f0")};
  font-weight: ${({ $highlight }) => ($highlight ? 700 : 500)};
  color: ${({ $highlight, theme }) =>
    $highlight
      ? theme.colors.primary
      : theme.mode === "dark"
        ? "#cbd5e1"
        : "#475569"};
`;

export const RelatedSection = styled.section`
  padding: 2.5rem 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const RelatedHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const RelatedTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
`;

export const RelatedLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-weight: 800;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
`;

export const RelatedCard = styled.div`
  background: ${({ theme }) => (theme.mode === "dark" ? "#111722" : "#ffffff")};
  border: 1px solid
    ${({ theme }) => (theme.mode === "dark" ? "#324467" : "#e2e8f0")};
  border-radius: 0.9rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

export const RelatedMedia = styled.div`
  border-radius: 0.75rem;
  overflow: hidden;
  background: ${({ theme }) => (theme.mode === "dark" ? "#232f48" : "#f8fafc")};
  aspect-ratio: 1;
`;

export const RelatedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${RelatedCard}:hover & {
    transform: scale(1.05);
  }
`;

export const RelatedName = styled.h4`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#0f172a")};
`;

export const RelatedDescription = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: ${({ theme }) => (theme.mode === "dark" ? "#92a4c9" : "#475569")};
  line-height: 1.5;
`;

export const RelatedFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const RelatedPrice = styled.span`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
`;

export const IconButton = styled.button`
  border: none;
  background: ${({ theme }) => (theme.mode === "dark" ? "#232f48" : "#f1f5f9")};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.65rem;
  padding: 0.45rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
  }
`;
