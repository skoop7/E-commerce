import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { ShoppingCart } from "lucide-react";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;
  if (!product) return <div className="text-center">Product not found</div>;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-6">
          ${product.price.toFixed(2)}
        </p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition duration-300 flex items-center justify-center"
        >
          <ShoppingCart className="h-5 w-5 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
