import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.info;
  return (
    <div className="m-2 p-4 w-[250px] h-[420px] bg-gray-100 rounded-lg hover:scale-105 duration-300 ease-in-out shadow-lg">
      <div>
        <img
          className="rounded-lg h-[250px]"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div>
        <h3 className="font-bold">{name}</h3>
        <h4 className="text-sm">{cuisines.join(", ")}</h4>
        <h4 className="text-sm">{avgRating}⭐</h4>
        <h4 className="text-sm">{costForTwo}</h4>
      </div>
    </div>
  );
};


export const withTopRated = (RestaurantCard) =>{
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-500 text-white font-bold rounded-md shadow m-1.5 px-2.5 py-1">Top-Rated</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;
