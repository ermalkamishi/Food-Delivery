import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (restaurant, menuItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) =>
          item.restaurantId === restaurant.id &&
          item.itemName === menuItem.name
      );

      if (existingItem) {
        return prev.map((item) =>
          item === existingItem
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          restaurantId: restaurant.id,
          restaurantName: restaurant.name,
          restaurantIcon: restaurant.icon,
          itemName: menuItem.name,
          price: menuItem.price,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (restaurantId, itemName) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.restaurantId === restaurantId &&
          item.itemName === itemName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
