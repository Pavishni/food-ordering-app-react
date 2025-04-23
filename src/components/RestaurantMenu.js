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

  //  const { itemCards } =
  // resMenuList?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;

  const recommendedCard = resMenuList?.cards
  ?.find((c) => c.groupedCard?.cardGroupMap?.REGULAR)
  ?.groupedCard?.cardGroupMap?.REGULAR?.cards
  ?.find((c) => c.card?.card?.title === "Recommended");

  const recommendedItems = recommendedCard?.card?.card?.itemCards;

  console.log(recommendedItems);

  return (
    <div>
      <h1>{name}</h1>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {recommendedItems.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs{" "}
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
