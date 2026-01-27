import React from "react";
import { Link } from "react-router-dom";
import {
  FooterWrapper,
  FooterInner,
  FooterGrid,
  BrandBlock,
  BrandHeader,
  LogoBox,
  BrandName,
  BrandDescription,
  SocialRow,
  SocialButton,
  Column,
  ColumnTitle,
  LinkList,
  LinkItem,
  NewsletterBlock,
  NewsletterText,
  InputWrapper,
  EmailInput,
  JoinButton,
  Divider,
  FooterBottom,
  Copyright,
  PaymentsRow,
  PaymentLogo,
} from "./Styled.Newsletter";
import { MdPublic, MdShare } from "react-icons/md";

const defaultQuickLinks = [
  { label: "Product Support", path: "#" },
  { label: "Order Tracking", path: "#" },
  { label: "Browse Catalog", path: "/catalog" },
  { label: "Returns & Refunds", path: "#" },
];

const defaultCompanyLinks = [
  { label: "About Us", path: "#" },
  { label: "Careers", path: "#" },
  { label: "Press Release", path: "#" },
  { label: "Terms of Service", path: "#" },
];

const defaultPayments = [
  {
    alt: "Payment provider logo visa",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBYlY8jIg0PqImxq8HaONJj5s6rFVP7nXWLp1RiHDwV4Dtn-WENdxDNJH7YAOtILzRcopIVNZgcsu_pD0B1x387yJJPi_qoL7BzbJXk7wyBb3RkTBXVtIr1O9bCZtiT-dW4WJUaoCx2UwW18waGhw1wIoq-4-JIFt3nPfExxH46wnkpr4F1FHnLR3G9JyEm7eE8zcyZZOiUhzdkfB-AZLgQX5Ugev5CdM81Ikn7WMEFHXICF_CfCYknO-oz41HodFt-5VvjbMkXW8H",
  },
  {
    alt: "Payment provider logo mastercard",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzOCz_49aUC_SFY0O_A7c_f8o0anDAXWG1JQRs2l7SmUjpcVZqAbtnTiBNZHsnN7Lg8dDsB6gYKP0ZYicxIvLBuzE97VyrE-sJFA1x_W488xV-M4Vd3NUzPXOBy6uXIcy5pw1-MRHEnLSOClKtn-zHLJYaJ-fECIdJCMIPjx6jmL3KioGdiNGFlXYyXNy7VX3sCY0hsf43jRfRt6w9qjyl4OClPfYavCdlAY7jhT9dxkjQsys8ZgZ6WnA6KLSiqTWIYWEr04u8sO4k",
  },
  {
    alt: "Payment provider logo paypal",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdewcjG0KbaRAJp5SJZwd5ccaGKfVgnvk9oIECYm1jCDXJ-ybBUptJoH73WtfZCO-9PU1EeYgIV0w9dEWOE3aOoN50Qzuo5PARvCpymQCjfRk76AXIzZha8_01R3hvlixK9lskcV0t0qwhMvVZu-JdTFH-XpjSovC0KUiW01L_ZAsbU70pA2kI-UzC5nZsP3srP3paUj6mt5nJVs7Jvrzpv8oooMnITHgPhW0rdav1LgWswApN2J88aJWssY0xV8bbFkAiQfW-QIt0",
  },
];

export const Newsletter = ({
  quickLinks = defaultQuickLinks,
  companyLinks = defaultCompanyLinks,
  payments = defaultPayments,
  onJoin = () => {},
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email") || "";
    onJoin(email);
  };

  return (
    <FooterWrapper>
      <FooterInner>
        <FooterGrid>
          <BrandBlock>
            <BrandHeader>
              <Link
                to="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  textDecoration: "none",
                }}
              >
                <LogoBox>⚡</LogoBox>
                <BrandName>TechStore</BrandName>
              </Link>
            </BrandHeader>
            <BrandDescription>
              Your one-stop destination for the latest in consumer electronics,
              computing power, and gadget innovation.
            </BrandDescription>
            <SocialRow>
              <SocialButton aria-label="website" href="#">
                <MdPublic size={18} />
              </SocialButton>
              <SocialButton aria-label="share" href="#">
                <MdShare size={18} />
              </SocialButton>
            </SocialRow>
          </BrandBlock>

          <Column>
            <ColumnTitle>Quick Links</ColumnTitle>
            <LinkList>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <LinkItem as={Link} to={link.path}>
                    {link.label}
                  </LinkItem>
                </li>
              ))}
            </LinkList>
          </Column>

          <Column>
            <ColumnTitle>Company</ColumnTitle>
            <LinkList>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <LinkItem as={Link} to={link.path}>
                    {link.label}
                  </LinkItem>
                </li>
              ))}
            </LinkList>
          </Column>

          <NewsletterBlock>
            <ColumnTitle>Newsletter</ColumnTitle>
            <NewsletterText>
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </NewsletterText>
            <form onSubmit={handleSubmit}>
              <InputWrapper>
                <EmailInput
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                />
                <JoinButton type="submit">Join</JoinButton>
              </InputWrapper>
            </form>
          </NewsletterBlock>
        </FooterGrid>

        <Divider>
          <FooterBottom>
            <Copyright>© 2026 TechStore Inc. All rights reserved.</Copyright>
            <PaymentsRow>
              {payments.map((p) => (
                <PaymentLogo key={p.alt} src={p.src} alt={p.alt} />
              ))}
            </PaymentsRow>
          </FooterBottom>
        </Divider>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Newsletter;
