import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id}>
          <div className="border-gray-300 border-b-2 m-2 p-2 text-left flex justify-between">
            <div className="w-9/12">
              <span className="py-2">{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {(item.card.info.price / 100) |
                  (item.card.info.defaultPrice / 100)}
              </span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-2/12">
              <div className="absolute">
                <button className="hover:bg-green-700 shadow-lg rounded-lg bg-green-400 p-1.5 text-xs text-white">
                  Add +{" "}
                </button>
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
