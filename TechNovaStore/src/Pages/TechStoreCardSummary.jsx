import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../Componets/ui/Breadcrumbs/Breadcrumbs";
import CartItem from "../Componets/ui/CartItem/CartItem";
import CartSummary from "../Componets/layout/CartSummary/CartSummary";
import RecommendedProducts from "../Componets/layout/RecommendedProducts/RecommendedProducts";
import {
  CartContainer,
  CartHeader,
  CartTitle,
  ItemCount,
  CartContent,
  CartItemsColumn,
  CartItemsList,
  EmptyCart,
  CartSummaryColumn,
} from "./Styled.TechStoreCardSummary";

const mockCartItems = [
  {
    id: 1,
    title: 'MacBook Pro 14" - M3 Pro Chip',
    subtitle: "18GB RAM, 512GB SSD, Space Black",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGKyxw3qREtNjQNVS0HYlChrFUC_WtS-6NU_dJB045P1rM9l2Ni_F6QnOFRJ5ozZbWbe6nAgEiWlH8IvBN7HUBO0p2K0FXC96AZIC-_15OpT66GRACkHp7hFnw0AjBVvPV229F00AF0srGCrmwtlat9oE5g6M8IqJ6fyMRBrIRqV2emT5PxeKvZXsRCTf5YwgDLawkYZySOL6AGP-5JFWcJVGwJK9Yy_wCQGZ6LANLLoky-XW28K4HBR-FCy-k-KrB3LwX5zFVBIvc",
    price: 5995000,
    quantity: 1,
  },
  {
    id: 2,
    title: "iPhone 15 Pro Max",
    subtitle: "256GB, Natural Titanium",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBo60gOhke02hU-VYdGZdy7bebc2nuMdjq3ZJ051GFiKAQepEX4__jxQryROpGUpKiic5GUjUI5TNaL9T2qpI06QQ-U3HZZ1CEQ0Ro-yYYVBBEA5jJGDfIdrtCaER-WJV9PU2QFWQ7kUbkTrXt6AN45ZkoQkliN0Ji4L5oWy8Il4IOUPYi0-_7CzVcxUs4gRBZgjajLOFyMSH-lsP4E0yqKYopKXiSb1gwg5Mt0jlKGH0J0xFmE3QxQgDThXCJgcBrOz0GJX6t3SL_1",
    price: 4795000,
    quantity: 1,
  },
  {
    id: 3,
    title: "Sonic X-10 Wireless Headphones",
    subtitle: "Active Noise Cancelling, Black",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnRkNMYEHMLWxL31XX7j6e8EbOaOYV2qk8JdArdeg3LobAmw0ZbmkteSvtRIScyuunaQ6u9wWNbVa2Y8s5ZdrmW46XfPkijrHUuwD6uGV-4RWU7Hubl9vIHQoNzw_ILDxR80c54wFBw7CqzXXdXqyPva_eXv9v9xY0qwIzzaBqtb9JFpah4vaiLB7XpX-OzKofzWa6xuakvCkUXmZ6n7OQR0SGWxeHySm8Q8GNvAIj0wImH3cHaAlqIG7RB0HPqz9Jfg2Wt9i7toQd",
    price: 1195000,
    quantity: 1,
  },
];

const TechStoreCardSummary = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(mockCartItems);

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Shopping Cart", path: "/cart" },
  ];

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 0;
  const tax = Math.round(subtotal * 0.08);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
  };

  const handleContinueShopping = () => {
    navigate("/catalog");
  };

  const handleAddRecommended = (productId) => {
    console.log("Add to cart:", productId);
  };

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
