import { useContext } from "react";
import { IoMdCart } from "react-icons/io";
import { CartContext } from "../../contexts/CartContext";

const CartWidget = () => {
  let productsInCart = 0;
  const { cart } = useContext(CartContext);
  cart.map((prod) => {
    productsInCart += prod.quantity;
  });

  return (
    <div>
      {productsInCart}
      <IoMdCart />
    </div>
  );
};

export default CartWidget;
