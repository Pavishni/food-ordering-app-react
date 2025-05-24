import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constants";
import searchResCard from "../components/mocks/searchResCard.json";

const useRestaurantMenu = (resId) => {
  const [resMenuList, setResMenuList] = useState(null);

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    try {
      const data = await fetch(RES_MENU_URL + resId);
      const json = await data.json();
      setResMenuList(json?.data);
    } catch (error) {
      setResMenuList(searchResCard?.data);
    }
  };

  return resMenuList;
};

export default useRestaurantMenu;
