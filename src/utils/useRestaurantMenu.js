import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resMenuList, setResMenuList] = useState(null);

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    const data = await fetch(RES_MENU_URL + resId);
    const json = await data.json();
    setResMenuList(json.data);
  };

  return resMenuList;
};

export default useRestaurantMenu;