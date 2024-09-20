/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { ShoppingCart } from "lucide-react";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <div className="flex justify-between items-center">
          <Link
            to={`/product/${product.id}`}
            className="text-primary hover:underline"
          >
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition duration-300 flex items-center"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
