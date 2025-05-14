import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants.js";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const totalPrice = cartItems.reduce((total,item) => {
    const itemPrice = (item.card.info.price || item.card.info.defaultPrice) * item.quantity/100;
    return total = total + itemPrice
  },0)
  return (
    <div className="m-4 p-4">
      <p className="font-semibold text-center text-3xl">Cart</p>
      <div className="w-6/12 h-[200px] lg:m-auto">
        <button
          className="cursor-pointer bg-gray-700 border-b-gray-700 shadow-lg text-white p-1.5 my-1.5 text-center"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
        {cartItems.length === 0 ? (
          <h1>Cart is empty. Please add items to cart</h1>
        ) : (
          <div>
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th className="px-6 py-3 font-medium text-gray-700 text-left">
                    Item
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-700 text-left">
                    Unit Price
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-700 text-left">
                    Quantity
                  </th>
                  <th className="px-6 py-3 font-medium text-gray-700 text-left">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.card.info.id} className="shadow-lg">
                    <td className="w-3/12 h-auto lg:p-4">
                      <img
                        className="p-1"
                        src={CDN_URL + item.card.info.imageId}
                        alt={"Image " + item.card.info.name}
                      />
                    </td>
                    <td className="px-6 py-3 text-left">
                      {item.card.info.name}
                    </td>
                    <td className="px-6 py-3 text-left">
                      {(item.card.info.price || item.card.info.defaultPrice) /
                        100}
                    </td>
                    <td className="px-6 py-3 text-left">{item.quantity}</td>
                    <td className="px-6 py-3 text-left">{(item.card.info.price || item.card.info.defaultPrice) * item.quantity/100 }</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="text-right font-bold text-xl p-4 lg:m-4">Total Price :{totalPrice}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
