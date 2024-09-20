import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";

function Header() {
  const cartItemsCount = useSelector((state) => state.cart.items.length);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            ShoppyGlobe
          </Link>
          <div className="flex items-center">
            <Link to="/" className="text-gray-800 hover:text-primary mx-4">
              Home
            </Link>
            <Link
              to="/cart"
              className="text-gray-800 hover:text-primary flex items-center"
            >
              <ShoppingCart className="h-6 w-6 mr-1" />
              <span className="bg-primary text-white rounded-full px-2 py-1 text-xs">
                {cartItemsCount}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
