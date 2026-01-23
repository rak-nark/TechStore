import React, { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import {
  SummaryContainer,
  SummaryCard,
  SummaryTitle,
  BreakdownSection,
  BreakdownRow,
  BreakdownLabel,
  BreakdownValue,
  BreakdownDivider,
  TotalRow,
  TotalLabel,
  TotalValue,
  TotalAmount,
  TotalCurrency,
  PromoSection,
  PromoLabel,
  PromoInputWrapper,
  PromoInput,
  PromoButton,
  CheckoutButton,
  TrustBadge,
  TrustIcon,
  TrustText,
  PaymentMethods,
  PaymentMethod,
  TrustDescription,
  BackButton,
} from "./Styled.CartSummary";

const formatCOP = (price) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const CartSummary = ({
  subtotal = 0,
  shipping = 0,
  tax = 0,
  onCheckout = () => {},
  onContinueShopping = () => {},
}) => {
  const [promoCode, setPromoCode] = useState("");

  const total = subtotal + shipping + tax;

  const handleApplyPromo = () => {
    console.log("Applying promo code:", promoCode);
  };

  return (
    <>
      <SummaryContainer>
        <SummaryCard>
          <SummaryTitle>Order Summary</SummaryTitle>

          <BreakdownSection>
            <BreakdownRow>
              <BreakdownLabel>Subtotal</BreakdownLabel>
              <BreakdownValue>{formatCOP(subtotal)}</BreakdownValue>
            </BreakdownRow>

            <BreakdownRow>
              <BreakdownLabel>Shipping</BreakdownLabel>
              <BreakdownValue
                $highlight={shipping === 0 ? "success" : "normal"}
              >
                {shipping === 0 ? "Free" : formatCOP(shipping)}
              </BreakdownValue>
            </BreakdownRow>

            <BreakdownRow>
              <BreakdownLabel>Estimated Tax</BreakdownLabel>
              <BreakdownValue>{formatCOP(tax)}</BreakdownValue>
            </BreakdownRow>

            <BreakdownDivider />

            <TotalRow>
              <TotalLabel>Total</TotalLabel>
              <TotalValue>
                <TotalAmount>{formatCOP(total)}</TotalAmount>
                <TotalCurrency>Calculated in COP</TotalCurrency>
              </TotalValue>
            </TotalRow>
          </BreakdownSection>

          <PromoSection>
            <PromoLabel>Promo Code</PromoLabel>
            <PromoInputWrapper>
              <PromoInput
                type="text"
                placeholder="TECH10"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <PromoButton onClick={handleApplyPromo}>Apply</PromoButton>
            </PromoInputWrapper>
          </PromoSection>

          <CheckoutButton onClick={onCheckout}>
            Proceed to Checkout
            <MdArrowForward />
          </CheckoutButton>
        </SummaryCard>

        <TrustBadge>
          <TrustIcon>✓</TrustIcon>
          <TrustText>Secure Payment Guaranteed</TrustText>

          <PaymentMethods>
            <PaymentMethod>VISA</PaymentMethod>
            <PaymentMethod>MC</PaymentMethod>
            <PaymentMethod>AMEX</PaymentMethod>
            <PaymentMethod>PAYPAL</PaymentMethod>
          </PaymentMethods>

          <TrustDescription>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </TrustDescription>
        </TrustBadge>
      </SummaryContainer>

      <BackButton onClick={onContinueShopping}>
        <MdArrowBack />
        Continue Shopping
      </BackButton>
    </>
  );
};

export default CartSummary;
