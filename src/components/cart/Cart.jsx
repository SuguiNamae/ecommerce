import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../../state/cartSlice";
import "./Cart.style.scss";
import CloseIcon from "@mui/icons-material/Close";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const itemCount = cartItems.reduce((acc, item) => {
    acc[item.label] = (acc[item.label] || 0) + 1;
    return acc;
  }, {});

  const totalPrice = Object.keys(itemCount).reduce((total, label) => {
    const item = cartItems.find((item) => item.label === label);
    if (item) {
      const price = parseFloat(item.price);
      if (!isNaN(price)) {
        return total + price * itemCount[label];
      }
    }
    return total; // Return the current total if item is not found or price is NaN
  }, 0);
  return (
    <div className="cartforall">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {Object.keys(itemCount).map((label) => {
            const item = cartItems.find((item) => item.label === label);
            return (
              <li key={label}>
                <div className="listdivitem">
                  <img src={item.imgSrc} alt="item" />
                  {item.label}
                  <p>{item.price} x</p>
                  {itemCount[label]}
                  <CloseIcon
                    className="closeicon"
                    onClick={() => {
                      dispatch(removeItem(item));
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p>Your total price is: ${totalPrice.toFixed(2)}</p>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default Cart;
