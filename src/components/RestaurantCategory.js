import ItemsList from "./ItemsList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    console.log("Clicked");
    setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 shadow-lg bg-gray-50 p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemsList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
