import RestaurantCard, { withTopRatedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredrestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardTopRated = withTopRatedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setlistOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredrestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Your are offline, please check your internet connection !!</h1>;
  }

  const { setUserName, loggedInUser } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search mt-4 ml-4">
          <input
            type="text"
            className="border border-solid border-gray-400 shadow-sm bg-gray-50 rounded-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="m-4 px-4 py-2 bg-green-200 rounded-md"
            onClick={() => {
              const restaurnatsAfterFilter = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredrestaurants(restaurnatsAfterFilter);
            }}
          >
            Search
          </button>
        </div>
        <div className="search mt-4 ml-4 flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-blue-100 rounded-md"
            onClick={() => {
              const filtededList = filteredRestaurants.filter(
                (res) => res.info.avgRating >= 4.3
              );
              setFilteredrestaurants(filtededList);
            }}
          >
            Top Rated Restaurants
          </button>

          <button
            className="reset-btn filter-btn px-4 py-2 bg-blue-100 ml-8 rounded-md"
            onClick={() => {
              setFilteredrestaurants(listOfRestaurants);
            }}
          >
            Reset
          </button>
          <input
            className="border border-solid border-gray-400 shadow-sm bg-gray-50 rounded-md ml-8 pl-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            className="link"
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating >= 4.3 ? (
              <RestaurantCardTopRated resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
