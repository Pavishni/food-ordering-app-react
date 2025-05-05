import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addItem(item));
    // alert(item.card.info.name+" added to cart");

  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 shadow-lg text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-4">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 h-auto p-4">
            <img
              className="p-1"
              src={CDN_URL + item.card.info.imageId}
              alt={"Image " + item.card.info.name}
            />
            <button
              className="bg-gray-600 h-6 w-20 text-white cursor-pointer text-center ml-8"
              onClick={() => handleAddToCart(item)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
