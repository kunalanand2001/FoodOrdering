import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredrestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    console.log(jsonData);
    setlistOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredrestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //   console.log("body Rendered");

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Your are offline, please check your internet connection !!</h1>;
  }

  //   Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="seach-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              console.log(searchText);

              const restaurnatsAfterFilter = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredrestaurants(restaurnatsAfterFilter);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filtededList = filteredRestaurants.filter(
              (res) => res.info.avgRating >= 4.2
            );
            setFilteredrestaurants(filtededList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            setFilteredrestaurants(listOfRestaurants);
          }}
        >
          Reset
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            className="link"
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
