import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-xl text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition duration-300"
      >
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
