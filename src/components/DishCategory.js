import ItemList from "./ItemList";
import { useState } from "react";

const DishCategory = ({ categoryData }) => {
  const [showItemList, setShowItemList] = useState(false);

  const handleClick = () => {
    setShowItemList(!showItemList);
  };

  return (
    <div>
      {/* dropdown header */}
      <div className=" bg-gray-100 shadow-lg p-4 w-6/12 mx-auto my-5">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {categoryData.title} ({categoryData.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* dropdown body */}

        {showItemList && <ItemList items={categoryData.itemCards} />}
      </div>
    </div>
  );
};

export default DishCategory;
