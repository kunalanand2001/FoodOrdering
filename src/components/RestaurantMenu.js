import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurnatMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  console.log(resId);

  const resInfo = useRestaurnatMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwo, cuisines } =
    resInfo?.data.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} {costForTwo / 100} for two.
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
