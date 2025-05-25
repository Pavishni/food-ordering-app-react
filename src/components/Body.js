import RestaurantCard, { withTopRated } from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerHome from "./ShimmerHome";
import { RES_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import resMenuMock from "./mocks/resMenuMock.json";

const Body = () => {
  const [listOfRestaurants, setRestaurants] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurants] = useState([]);
  const [searchRestaurants, setSearchRestaurants] = useState("");
  const RestaurantCardRated = withTopRated(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const extractRestaurantList = (data) => {
    return (
      data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  const fetchData = async () => {
    try {
      const data = await fetch(RES_URL);

      const json = await data.json();
      const restaurantsList = extractRestaurantList(json?.data);
      setRestaurants(restaurantsList);
      setFilteredRestaurants(restaurantsList);
    } catch (error) {
      console.log("Error fetching live data:", error);
      const mockData = extractRestaurantList(resMenuMock?.data);
      console.log(mockData);
      setRestaurants(mockData);
      setFilteredRestaurants(mockData);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>You're offline. Please check your internet connection</h1>;

  return listOfRestaurants?.length === 0 ? (
    <ShimmerHome />
  ) : (
    <div className="bg-white/70 backdrop-blur-md">
      <div className="m-7 lg:mx-12">
        <div className="flex flex-wrap">
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
            className="border-2 rounded-lg bg-gray-500 text-white p-1 h-auto cursor-pointer"
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
            className="border-2 rounded-lg bg-gray-500 text-white p-1 h-auto text-s cursor-pointer"
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
      <div className="flex flex-wrap m-5 lg:m-10 lg:p-5">
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
