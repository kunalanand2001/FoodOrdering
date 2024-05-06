import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="res-card m-4 p-4 w-[250px] bg-gray-200 rounded-md hover:bg-gray-300">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} ⭐</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.slaString}</h5>
    </div>
  );
};

// higher order component. (returns a component)
export const withTopRatedLabel = (RestaurantCard) => {    // taking RestaurantCard as input
  return (props) => {
    return (
      <div>
        <label className="absolute bg-violet-600 text-white m-2 p-2 rounded-lg text-sm">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
