import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurnatMenu from "../utils/useRestaurantMenu";
import DishCategory from "./DishCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurnatMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwo, cuisines } =
    resInfo?.data.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);

  const dishCategories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(dishCategories);

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-8">{name}</h1>
      <p className="font-bold text-xl mb-10">
        {cuisines.join(", ")} - ₹{costForTwo / 100} for two
      </p>
      {dishCategories.map((category) => (
        <DishCategory categoryData={category?.card?.card} />
      ))}
    </div>
  );
};
export default RestaurantMenu;
