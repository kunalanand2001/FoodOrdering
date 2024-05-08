import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurnatMenu from "../utils/useRestaurantMenu";
import DishCategory from "./DishCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurnatMenu(resId);

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwo, cuisines } =
    resInfo?.data.cards[2]?.card?.card?.info;

  const dishCategories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(dishCategories);

  const setCategory = (index) => {
    selectedCategoryIndex === index
      ? setSelectedCategoryIndex(null)
      : setSelectedCategoryIndex(index);
  };

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-8">{name}</h1>
      <p className="font-bold text-xl mb-10">
        {cuisines.join(", ")} - ₹{costForTwo / 100} for two
      </p>
      {dishCategories.map((category, index) => (
        <DishCategory
          key={category?.card?.card.title}
          categoryData={category?.card?.card}
          showItemList={index === selectedCategoryIndex}
          setSelectedCategoryIndex={() => setCategory(index)}
          index={index}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
