import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <p className="p-2 m-3 font-semibold text-center text-3xl">Cart</p>
      <div className="w-6/12 h-[200px] m-auto">
        <button
          className="cursor-pointer bg-gray-700 border-b-gray-700 shadow-lg text-white p-2"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
