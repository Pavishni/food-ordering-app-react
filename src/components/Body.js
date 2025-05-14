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

  return listOfRestaurants?.length === 0 ? (
    <ShimmerHome />
  ) : (
    <div className="bg-white/70 backdrop-blur-md">
      <div className="m-7 lg:mx-12">
        <div className="flex lg:flex-wrap">
          <div className="pr-2">
            <input
              data-testid="searchInput"
              type="text"
              className="border-2 rounded-sm bg-purple-100 p-1"
              value={searchRestaurants}
              onChange={(e) => {
                setSearchRestaurants(e.target.value);
              }}
            />
          </div>
          <button
            className="border-2 rounded-lg bg-gray-500 text-white p-1 h-auto"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants?.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchRestaurants.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
          <button
            className="border-2 rounded-lg bg-gray-500 text-white p-1 h-auto text-s"
            onClick={() => {
              const filteredList = listOfRestaurants?.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top-Rated
          </button>
        </div>
      </div>
      <div className="flex flex-wrap p-5 m-10">
        {filteredRestaurantList?.map((restaurant) => (
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
