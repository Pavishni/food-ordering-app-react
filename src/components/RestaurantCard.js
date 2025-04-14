import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.info;
  return (
    <div>
      <div>
        <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
