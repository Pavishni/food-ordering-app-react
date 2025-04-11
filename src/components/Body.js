import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
    const [listOfRestaurants, setRestaurants] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating >= 4.5
                        );
                        setRestaurants(filteredList);
                    }}>
                    Top Rated Restaurants
                    </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))}
            </div>
        </div>
    )
}

export default Body;