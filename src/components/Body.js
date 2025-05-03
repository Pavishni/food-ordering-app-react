import RestaurantCard, { withTopRated } from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerHome from "./ShimmerHome";
import { RES_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listOfRestaurants, setRestaurants] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurants] = useState([]);
  const [searchRestaurants, setSearchRestaurants] = useState("");
  const RestaurantCardRated = withTopRated(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL);

    const json = await data.json();
    setRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>You're offline. Please check your internet connection</h1>;

  console.log(listOfRestaurants);

  return listOfRestaurants.length === 0 ? (
    <ShimmerHome />
  ) : (
    <div className="bg-cover bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <div className="flex pt-8 pl-20">
        <div className="flex p-3">
          <div className="pr-2">
            <input
              type="text"
              className="border-2 rounded-sm bg-purple-100 p-1"
              value={searchRestaurants}
              onChange={(e) => {
                setSearchRestaurants(e.target.value);
              }}
            />
          </div>
          <button
            className="px-2 border-2 shadow-lgpy-2 bg-blue-200px-8 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg cursor-pointer"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchRestaurants.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-3">
          <button
            className="px-2 border-2 shadow-lgpy-2 bg-blue-200px-8 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap p-5 m-10">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.5 ? (
              <RestaurantCardRated resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
