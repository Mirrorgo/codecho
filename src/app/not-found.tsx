import { ErrorResponse, useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function NotFound() {
  const error = useRouteError() as ErrorResponse;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-center max-w-lg p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <p className="text-sm text-gray-500 mb-4 italic">
          {error?.statusText || "An unexpected error has occurred."}
        </p>
        <Link
          to="/"
          className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 ease-in-out"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
