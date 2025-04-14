import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resMenuList, setResMenuList] = useState(null);

  const {resId} = useParams();
  console.log(resId);

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    const data = await fetch(
      RES_MENU_URL + resId
    );
    const json = await data.json();
    setResMenuList(json.data);
  };

  if (resMenuList === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    resMenuList?.cards[2]?.card?.card?.info;

//   const { itemCards } =
//     resMenuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

const menuCards = resMenuList?.cards
  ?.find((c) => c.groupedCard?.cardGroupMap?.REGULAR)
  ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

const allItemCards = menuCards
  ?.filter((c) => c.card?.card?.itemCards)
  ?.flatMap((c) => c.card.card.itemCards);


  return (
    <div>
      <h1>{name}</h1>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {allItemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs {(item.card.info.price || item.card.info.defaultPrice)/100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
