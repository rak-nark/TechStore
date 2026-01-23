import React, { useState } from "react";
import { MdDelete, MdAdd, MdRemove } from "react-icons/md";
import {
  CartItemContainer,
  ItemImage,
  ItemContent,
  ItemHeader,
  ItemTitle,
  ItemSubtitle,
  DeleteButton,
  QuantitySection,
  QuantityControl,
  QuantityButton,
  QuantityDisplay,
  PriceDisplay,
} from "./Styled.CartItem";

const formatCOP = (price) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const CartItem = ({
  id,
  image,
  title,
  subtitle,
  price,
  quantity = 1,
  onQuantityChange = () => {},
  onRemove = () => {},
}) => {
  const [qty, setQty] = useState(quantity);

  const handleIncrease = () => {
    const newQty = qty + 1;
    setQty(newQty);
    onQuantityChange(id, newQty);
  };

  const handleDecrease = () => {
    if (qty > 1) {
      const newQty = qty - 1;
      setQty(newQty);
      onQuantityChange(id, newQty);
    }
  };

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <CartItemContainer>
      <ItemImage src={image} alt={title} />

      <ItemContent>
        <ItemHeader>
          <div>
            <ItemTitle>{title}</ItemTitle>
            <ItemSubtitle>{subtitle}</ItemSubtitle>
          </div>
          <DeleteButton onClick={handleRemove} title="Remove item">
            <MdDelete />
          </DeleteButton>
        </ItemHeader>

        <QuantitySection>
          <QuantityControl>
            <QuantityButton onClick={handleDecrease} disabled={qty <= 1}>
              <MdRemove />
            </QuantityButton>
            <QuantityDisplay>{qty}</QuantityDisplay>
            <QuantityButton onClick={handleIncrease}>
              <MdAdd />
            </QuantityButton>
          </QuantityControl>
          <PriceDisplay>{formatCOP(price * qty)}</PriceDisplay>
        </QuantitySection>
      </ItemContent>
    </CartItemContainer>
  );
};

export default CartItem;
