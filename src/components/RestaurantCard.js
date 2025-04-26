import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.info;
  return (
    <div className="m-2 p-4 w-[250px] h-[420px] bg-gray-100 rounded-lg hover:scale-105 duration-300 ease-in-out shadow-lg">
      <div>
        <img
          className="rounded-lg h-[250px]"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="">
        <h3 className="font-bold">{name}</h3>
        <h4 className="text-sm">{cuisines.join(", ")}</h4>
        <h4 className="text-sm">{avgRating}⭐</h4>
        <h4 className="text-sm">{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
