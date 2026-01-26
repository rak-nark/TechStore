import React from "react";
import Breadcrumbs from "../../Componets/ui/Breadcrumbs/Breadcrumbs";
import CartItem from "../../Componets/ui/CartItem/CartItem";
import CartSummary from "../../Componets/layout/SummaryCard/CartSummary/CartSummary";
import RecommendedProducts from "../../Componets/layout/SummaryCard/RecommendedProducts/RecommendedProducts";
import { useCardSummaryLogic } from "./useCardSummaryLogic";
import {
  CartHeader,
  CartTitle,
  ItemCount,
  CartContent,
  CartItemsColumn,
  CartItemsList,
  EmptyCart,
  CartSummaryColumn,
} from "./Styled.TechStoreCardSummary";

const TechStoreCardSummary = () => {
  const {
    breadcrumbItems,
    cartItems,
    subtotal,
    shipping,
    tax,
    handleQuantityChange,
    handleRemoveItem,
    handleCheckout,
    handleContinueShopping,
    handleAddRecommended,
  } = useCardSummaryLogic();

  return (
    <>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
        <Breadcrumbs items={breadcrumbItems} />

        <CartHeader>
          <CartTitle>
            Your Cart <ItemCount>({cartItems.length} items)</ItemCount>
          </CartTitle>
        </CartHeader>

        {cartItems.length > 0 ? (
          <CartContent>
            <CartItemsColumn>
              <CartItemsList>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    subtitle={item.subtitle}
                    price={item.price}
                    quantity={item.quantity}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemoveItem}
                  />
                ))}
              </CartItemsList>
            </CartItemsColumn>

            <CartSummaryColumn>
              <CartSummary
                subtotal={subtotal}
                shipping={shipping}
                tax={tax}
                onCheckout={handleCheckout}
                onContinueShopping={handleContinueShopping}
              />
            </CartSummaryColumn>
          </CartContent>
        ) : (
          <EmptyCart>
            <h2>Your cart is empty</h2>
            <p>Add items to get started!</p>
            <button onClick={handleContinueShopping}>Continue Shopping</button>
          </EmptyCart>
        )}
      </div>

      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
        <RecommendedProducts onAddToCart={handleAddRecommended} />
      </div>
    </>
  );
};

export default TechStoreCardSummary;
