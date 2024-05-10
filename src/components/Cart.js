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
    <div className="text-center m-4 p-4 bg-gray-300">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button className="m-2 p-2 bg-red rounded-xl" onClick={handleClick}>
        Clear Cart
      </button>
      <div className="w-6/12 mx-auto rounded-xl">
        {cartItems.length === 0 && <h1>Cart Is Empty.</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
