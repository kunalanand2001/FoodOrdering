import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { REST_LINK_PT1, REST_LINK_PT2 } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  console.log(resId);

  const fetchMenu = async () => {
    const data = await fetch(REST_LINK_PT1 + resId + REST_LINK_PT2);
    const json = await data.json();
    setResInfo(json);
  };

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
            {item.card.info.price / 100 || item.card.info.defaultPrice/100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;

