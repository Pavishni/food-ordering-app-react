import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const resMenuList = useRestaurantMenu(resId);

  console.log(resMenuList);

  if (resMenuList === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    resMenuList?.cards[2]?.card?.card?.info;

  const recommendedCard = resMenuList?.cards
  ?.find((c) => c.groupedCard?.cardGroupMap?.REGULAR)
  ?.groupedCard?.cardGroupMap?.REGULAR?.cards
  ?.find((c) => c.card?.card?.itemCards);

  const recommendedItems = recommendedCard?.card?.card?.itemCards;

  console.log(recommendedCard);

  return (
    <div className="bg-cover bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <h1 className="m-5 text-3xl font-bold text-black shadow-2xl">{name}</h1>
      <h3 className="m-2 p-2 font-semibold text-xl text-gray-800">{costForTwoMessage}</h3>
      <ul className="m-2 p-5 text-gray-750">
        {recommendedItems.map((item) => (
          <li key={item.card.info.id} className="list-disc m-2 p-2 border-zinc-300 bg-gray-100">
            {item.card.info.name} - Rs{" "}
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
