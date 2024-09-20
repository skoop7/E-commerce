/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { X } from "lucide-react";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-4">
      <div className="flex items-center">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-16 h-16 object-cover rounded-md mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-600">Quantity: {item.quantity}</p>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-lg font-semibold mr-4">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
