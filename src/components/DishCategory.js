import ItemList from "./ItemList";

const DishCategory = ({ categoryData }) => {
  return (
    <div>
      {/* dropdown header */}
      <div className=" bg-gray-100 shadow-lg p-4 w-6/12 mx-auto my-5">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {categoryData.title} ({categoryData.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* dropdown body */}
        <ItemList items={categoryData.itemCards} />
      </div>
    </div>
  );
};

export default DishCategory;
