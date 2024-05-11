import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 bg-gray-100 w-6/12 mx-auto rounded-xl">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div>
        {cartItems.length === 0 && <h1 className="font-bold italic mt-4 mb-2 p-2">Cart Is Empty.</h1>}
        <ItemList items={cartItems} />
      </div>

      <button  className="m-4 px-4 py-2 bg-green-200 rounded-md" onClick={handleClick}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
