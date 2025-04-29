import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenuList = useRestaurantMenu(resId);

  if (resMenuList === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    resMenuList?.cards[2]?.card?.card?.info;

  const categories = resMenuList?.cards
    ?.find((c) => c.groupedCard?.cardGroupMap?.REGULAR)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold my-5">{name}</h1>
      <h2 className="font-bold text-lg">
        {cuisines.join(",  ")} - {costForTwoMessage}
      </h2>
      {categories.map((category) => (
        <RestaurantCategory data={category?.card?.card} key={category?.card?.card?.categoryId} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
